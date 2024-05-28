[![npm version](https://img.shields.io/npm/v/react-native-onboard-carousel)](https://www.npmjs.com/package/react-native-onboard-carousel)
[![npm license](https://img.shields.io/npm/l/react-native-onboard-carousel)](https://www.npmjs.com/package/react-native-onboard-carousel)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<H3 align="center"><strong>React Native Onboard Carousel</strong></H3>
<div align="center">Build a cool onboarding in your app fast</div>

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
import Onboard from 'react-native-onboard-carousel';

const App = () => {
  return (
    <Onboard
      slides={[
        {
          id: 1,
          img: require('./assets/image1.jpeg'),
          title: 'Ride like a king',
          subtitle: 'The future of transport is now in your hands',
          outro: 'Join us',
        },
        {
          id: 2,
          img: require('./assets/image2.jpeg'),
          title: 'Order in real time',
          subtitle: 'At the best rates',
          outro: 'Join Us',
        },
      ]}
    />
  );
};
```

### Using server images

If you wish to load your image assets from the web rather than from your project, you can type in the web url.

<!-- ```jsx
img: 'https://me.com/img/cute_cat_pic3266421.png'
``` -->

## Customization

`react-native-onboard-carousel` is designed to be very customizable. You can use the default UI or create your own by implementing the provided interfaces

## Get in touch

Questions? Suggestions? Feel free to [open an issue](https://github.com/Abuka-Victor/react-native-onboard-carousel/issues), [submit a PR](https://github.com/Abuka-Victor/react-native-onboard-carousel/pulls), or contact me.

## Authors

- Victor Abuka ([LinkedIn](https://www.linkedin.com/in/victor-abuka/))

## License

ISC License
