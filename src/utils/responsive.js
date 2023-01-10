const BASE_HEIGHT = 812;
const BASE_WIDTH = 375;

import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

export const wp = dimension => {
  return wp2dp((dimension / BASE_WIDTH) * 100 + '%');
};

export const hp = dimension => {
  return hp2dp((dimension / BASE_HEIGHT) * 100 + '%');
};
