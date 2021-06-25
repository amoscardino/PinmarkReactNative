
# Pinmark (React Native)

This repo contains the source for a (really) simple Pinboard client built using [React Native](https://reactnative.dev) and [Expo](https://expo.io). This is intended as a demonstration of React Native and as a comparison with a [similar repo built using Ionic Framework](https://github.com/amoscardino/PinmarkIonic).

## Set Up

Make sure you have the Expo CLI installed:

```bash
npm install -g expo-cli
```

Then clone the repo and run `npm install` in the directory.

## Running

Use `expo start` to run the project.

> If you want to run in a browser, you will need to uncomment a line in `src/hooks/useBookmarks.js` to get around CORS issues.
