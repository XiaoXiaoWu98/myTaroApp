/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'star' | 'fenxiang' | 'icon_navigation_bar_arrow' | 'cartoon' | 'novel' | 'home' | 'mine' | 'right-arrow';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
