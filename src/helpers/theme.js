import config from '../config/appConfig';

import blue from '../config/themes/blue';
import green from '../config/themes/green';

const ThemeHelper = {
  getTheme() {
    const { themeName } = config;

    switch (themeName) {
      case 'blue': return blue;
      case 'green': return green;
      default: return green;
    }
  }
};

export default ThemeHelper;
