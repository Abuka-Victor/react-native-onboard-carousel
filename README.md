[![npm version](https://img.shields.io/npm/v/react-native-onboard-carousel)](https://www.npmjs.com/package/react-native-onboard-carousel)
[![npm license](https://img.shields.io/npm/l/react-native-onboard-carousel)](https://www.npmjs.com/package/react-native-onboard-carousel)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<H3 align="center"><strong>React Native Onboard Carousel</strong></H3>
<div align="center">Build a cool onboarding in your app fast</div>

![React Native Onboard Carousel cover](./sample.png)

<div align="center">
<a href="https://github.com/Abuka-Victor/react-native-onboard-carousel">GitHub</a> 
<span> · </span>
<a href="https://snack.expo.dev/@abuka/react-native-onboard-carousel-demo?platform=ios">Demo</a>

</div>

## Introduction

This library is an onboarding carousel component which can be used for effortless user onboarding and focuses on saving developer time.

## Why

- The Onboarding Carousel that Doesn't Suck: Bold and attention-grabbing (use with caution!).
- Level Up Your App Onboarding: Appeals to developers seeking improvement.
- The Missing Piece for Your Onboarding Puzzle: Creates a sense of necessity.

## Features

- 🎨 Fully customizable configurations
- 🔧 Load images locally or from the web or design a custom image component
- ✨ Beautiful default UI
- 📦 Lightweight
- 🚀 Works with Expo by default

## Install

Install the package from your command line.

#### With yarn

```bash
yarn add react-native-onboard-carousel
```

#### With npm

```bash
npm install react-native-onboard-carousel
```

## Quick start

Place the `Onboard` component anywhere in your app. It will automatically take up the entire screen.

```jsx
import { Image, StyleSheet } from 'react-native';
import Onboard from 'react-native-onboard-carousel';

import image1 from './assets/image1.png';
import image2 from './assets/ipad.jpeg';

const App = function () {
  return (
    <Onboard
      slides={[
        {
          id: 1,
          ImageComponent: () => {
            return (
              <Image
                source={image1}
                resizeMode="contain"
                style={styles.image}
                accessibilityRole="image"
              />
            );
          },
          title: 'Ride like a king',
          subtitle: 'The future of transport is now in your hands',
          outro: 'Starting from $10',
        },
        {
          id: 2,
          ImageComponent: () => {
            return (
              <Image
                source={image2}
                resizeMode="contain"
                style={styles.image}
                accessibilityRole="image"
              />
            );
          },
          title: 'Order in real time',
          subtitle: 'At the best rates',
          outro: '$99.99 Cap',
        },
        {
          id: 3,
          imageUri:
            'https://t3.ftcdn.net/jpg/06/36/01/48/360_F_636014891_ne8XUB4YU4WoMeUUjr0TU6wH38wNTU6V.jpg',
          title: 'Some other important text',
          subtitle: 'Some subtitle',
          webImage: true,
        },
      ]}
      skipEnabled={true}
      onDone={() => console.log('Move to another screen')}
      backgroundColor={'#fff'}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    flex: 0.6,
  },
});

export default App;
```

### Contributing

If you wish to contribute please see [Contributing.md](./Contributing.md).

## Customization

`react-native-onboard-carousel` is designed to be very customizable. You can use the default UI or create your own by implementing the provided interfaces

## Get in touch

Questions? Suggestions? Feel free to [open an issue](https://github.com/Abuka-Victor/react-native-onboard-carousel/issues), [submit a PR](https://github.com/Abuka-Victor/react-native-onboard-carousel/pulls), or contact me.

## Authors

- Victor Abuka ([LinkedIn](https://www.linkedin.com/in/victor-abuka/))

## License

ISC License
