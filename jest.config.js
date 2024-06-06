module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>'],
  modulePaths: ['./src'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|expo|expo-asset|expo-font|expo-constants|expo-splash-screen|expo-status-bar|expo-permissions|expo-linking|react-native-gesture-handler|react-native-reanimated|react-native-screens)/)'
  ]
};
