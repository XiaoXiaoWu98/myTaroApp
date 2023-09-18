/* eslint-disable */

import React from 'react';

import IconStar from './IconStar';
import IconFenxiang from './IconFenxiang';
import IconIconNavigationBarArrow from './IconIconNavigationBarArrow';
import IconCartoon from './IconCartoon';
import IconNovel from './IconNovel';
import IconHome from './IconHome';
import IconMine from './IconMine';
import IconRightArrow from './IconRightArrow';
export { default as IconStar } from './IconStar';
export { default as IconFenxiang } from './IconFenxiang';
export { default as IconIconNavigationBarArrow } from './IconIconNavigationBarArrow';
export { default as IconCartoon } from './IconCartoon';
export { default as IconNovel } from './IconNovel';
export { default as IconHome } from './IconHome';
export { default as IconMine } from './IconMine';
export { default as IconRightArrow } from './IconRightArrow';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'star':
      return <IconStar key="1" {...rest} />;
    case 'fenxiang':
      return <IconFenxiang key="2" {...rest} />;
    case 'icon_navigation_bar_arrow':
      return <IconIconNavigationBarArrow key="3" {...rest} />;
    case 'cartoon':
      return <IconCartoon key="4" {...rest} />;
    case 'novel':
      return <IconNovel key="5" {...rest} />;
    case 'home':
      return <IconHome key="6" {...rest} />;
    case 'mine':
      return <IconMine key="7" {...rest} />;
    case 'right-arrow':
      return <IconRightArrow key="8" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
