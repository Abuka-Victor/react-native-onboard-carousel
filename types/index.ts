import { Animated, ViewToken } from "react-native";

type GenericFunction = (...args: any[]) => any;

export interface PageInterface {

  id: number,
  img: string,
  title: string,
  subtitle: string,
  outro: string,
  webImage: boolean,
}

export interface OnboardProps {
  onDone: GenericFunction,
  skipEnabled?: boolean,
  ImageComponent: React.FC,
  TitleComponent: React.FC,
  SubtitleComponent: React.FC,
  OutroComponent: React.FC,
  backgroundColor: string,
  slides: PageInterface[],
}

export interface SlideItemProps {
  item: PageInterface,
  ImageComponent: React.FC,
  TitleComponent: React.FC,
  SubtitleComponent: React.FC,
  OutroComponent: React.FC,
}

export interface PaginationProps {
  data: PageInterface[], scrollX: Animated.Value
}

export interface HandleViewChangeProps {
  viewableItems: ViewToken<any>[];
  changed: ViewToken<any>[];
}