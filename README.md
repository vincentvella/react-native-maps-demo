# Problem Statement

## It appears that React Native Maps has not been fully/correctly linked in the expo project on Android due to documented (but missing) google map functionality.

## Proof of existing functionality:
- Setup React Native on your own machine if it is not already set up:
Press "React Native CLI Quickstart" tab in order to get up and running.
  - https://facebook.github.io/react-native/docs/getting-started
- Clone this repository
- Add your GMAPS api key in the following locations:
  - [AppDelegate.m line 19](ios/MapDemo/AppDelegate.m)
  - [AndroidManifest.xml line 15](android/app/src/main/AndroidManifest.xml)
- yarn install
- cd ios
- pod install
- Run on iOS
  - npx react-native run-ios
- Run on Android
  - npx react-native run-android
- Press the green button at the bottom of the screen to see the expected functionality.

## Proof of missing functionality:
### I copied the exact same javascript file (dependencies and all) into an expo project to demonstrate the missing functionality:

https://snack.expo.io/@vincentvella/d2ed59

### Notice that the app  works the exact same on iOS but when reproduced on Android the logs read "Error Retrieving Point"