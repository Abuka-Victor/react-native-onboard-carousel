import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useRef, useState } from 'react';

import {
  OnboardProps,
  SlideItemProps,
  PaginationProps,
  HandleViewChangeProps,
} from '../types';

const { width, height } = Dimensions.get('screen');
const SlideItem: React.FC<SlideItemProps> = ({
  item,
  ImageComponent,
  TitleComponent,
  SubtitleComponent,
  OutroComponent,
}) => {
  return (
    <View style={styles.slideContainer}>
      {ImageComponent ? (
        <ImageComponent />
      ) : (
        <Image
          source={!item.webImage ? require(item.img) : { uri: item.img }}
          resizeMode="contain"
          style={styles.image}
        />
      )}
      <View style={styles.content}>
        {TitleComponent ? (
          <TitleComponent />
        ) : (
          <Text style={styles.title}>{item.title}</Text>
        )}
        {SubtitleComponent ? (
          <SubtitleComponent />
        ) : (
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        )}

        {OutroComponent ? (
          <OutroComponent />
        ) : (
          <Text style={styles.outro}>{item.outro}</Text>
        )}
      </View>
    </View>
  );
};

const Pagination: React.FC<PaginationProps> = ({ data, scrollX }) => {
  return (
    <View style={styles.dotContainer}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#000', '#ccc'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { width: dotWidth, backgroundColor }]}
          />
        );
      })}
    </View>
  );
};

const Onboard: React.FC<OnboardProps> = ({
  onDone,
  skipEnabled,
  ImageComponent,
  TitleComponent,
  SubtitleComponent,
  OutroComponent,
  backgroundColor,
  slides,
}) => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(e);
  };

  const handleViewableItemChanged = useRef(
    ({ viewableItems }: HandleViewChangeProps) => {
      if (viewableItems[0].index !== null) {
        setIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item, index }) => {
          return (
            <SlideItem
              key={index.toString()}
              item={item}
              ImageComponent={ImageComponent}
              TitleComponent={TitleComponent}
              OutroComponent={OutroComponent}
              SubtitleComponent={SubtitleComponent}
            />
          );
        }}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onScroll={handleScroll}
        onViewableItemsChanged={handleViewableItemChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slides} scrollX={scrollX} />
      <View style={styles.buttonContainer}>
        {index === slides.length - 1 ? (
          <TouchableOpacity style={styles.button} onPress={() => onDone()}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (flatListRef !== null && flatListRef.current !== null) {
                flatListRef.current.scrollToIndex({
                  index: index + 1,
                  animated: true,
                });
              }
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
      {skipEnabled ? (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 70,
            right: 20,
          }}
          onPress={() => {
            if (flatListRef !== null && flatListRef.current !== null) {
              flatListRef.current.scrollToIndex({
                index: slides.length - 1,
                animated: true,
              });
            }
          }}
        >
          <Text style={{ fontSize: 18 }}>Skip</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  slideContainer: {
    width,
    height,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 0.4,
  },
  image: {
    width: '100%',
    flex: 0.6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  outro: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
  },
  dot: {
    height: 12,
    width: 12,
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginHorizontal: 5,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 130,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 99,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
