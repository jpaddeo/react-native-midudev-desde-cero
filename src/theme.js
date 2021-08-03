import { Platform } from 'react-native';
const theme = {
  appBar: {
    primary: '#24292e',
    textPrimary: '#fff',
    textSecondary: '#999',
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fff',
    androidPrimary: 'green',
    iosPrimary: 'purple',
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
