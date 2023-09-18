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

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'star':
      return <IconStar {...rest} />;
    case 'fenxiang':
      return <IconFenxiang {...rest} />;
    case 'icon_navigation_bar_arrow':
      return <IconIconNavigationBarArrow {...rest} />;
    case 'cartoon':
      return <IconCartoon {...rest} />;
    case 'novel':
      return <IconNovel {...rest} />;
    case 'home':
      return <IconHome {...rest} />;
    case 'mine':
      return <IconMine {...rest} />;
    case 'right-arrow':
      return <IconRightArrow {...rest} />;

  }

  return null;
};

export default IconFont;
