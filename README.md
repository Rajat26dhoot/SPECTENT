# Spectent Inspection App

This is a React Native application built with Expo for managing and viewing inspection history.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) app on your iOS or Android device (for physical device testing)

## Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Spectent
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the App

To start the development server, run:

```bash
npm start
```

This will start Metro Bundler. From here, you can:

- **Run on Android Device/Emulator**: Press `a` in the terminal, or scan the QR code with the Expo Go app on Android.
- **Run on iOS Simulator**: Press `i` in the terminal (Requires Xcode installed).
- **Run on iOS Device**: Scan the QR code with the Camera app on iOS (requires Expo Go).
- **Run on Web**: Press `w` in the terminal.

### Additional Commands

- `npm run android` - Shortcut to run on Android
- `npm run ios` - Shortcut to run on iOS
- `npm run web` - Shortcut to run on Web

## Project Structure

- `App.js`: Main entry point of the application.
- `InspectionHistoryScreen.jsx`: Main screen displaying the list of inspections.
- `components/`: Reusable UI components.
- `assets/`: Images and other static assets.
- `colors.js`: Global color definitions.
- `mockData.js`: Sample data for the application.

## Troubleshooting

If you encounter issues with the cache or dependencies, try starting Expo with the clear cache flag:

```bash
npx expo start -c
```
