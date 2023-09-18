/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconIconNavigationBarArrow = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M683.918 996.807L200.363 513.252a82.773 82.773 0 0 1 0-28.445L683.918 1.252c3.698-1.593 14.222-1.707 28.445 0l56.889 56.888c1.592 14.848 1.706 25.6 0 28.445L371.029 484.807a25.543 25.543 0 0 0 0 28.445l398.223 398.222c1.536 2.844 1.706 13.482 0 28.444l-56.89 56.89c-14.108 1.649-24.69 1.706-28.444 0z"
        fill={getIconColor(color, 0, '#292929')}
      />
    </svg>
  );
};

IconIconNavigationBarArrow.defaultProps = {
  size: 18,
};

export default IconIconNavigationBarArrow;
