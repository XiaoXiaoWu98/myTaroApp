/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFenxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M771.012 0a180.706 180.706 0 1 1-121.916 314.067L417.31 454.415a181.308 181.308 0 0 1 0.964 74.33l236.725 139.807a180.706 180.706 0 1 1-61.44 103.785L357.075 632.47a180.706 180.706 0 1 1-3.735-280.095l239.074-144.805A180.706 180.706 0 0 1 771.012 0z m0 746.918a60.235 60.235 0 1 0 0 120.47 60.235 60.235 0 0 0 0-120.47z m-530.07-313.224a60.235 60.235 0 1 0 0 120.47 60.235 60.235 0 0 0 0-120.47z m530.07-313.223a60.235 60.235 0 1 0 0 120.47 60.235 60.235 0 0 0 0-120.47z"
        fill={getIconColor(color, 0, '#262626')}
      />
    </Svg>
  );
};

IconFenxiang.defaultProps = {
  size: 18,
};

IconFenxiang = React.memo ? React.memo(IconFenxiang) : IconFenxiang;

export default IconFenxiang;
