/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconNovel = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1390 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1279.461 1023.999h-73.995a7.04 7.04 0 1 1 0-14.08h73.995a7.04 7.04 0 1 1 0 14.08z m-127.81 0H167.345a7.04 7.04 0 1 1 0-14.08h984.306a7.04 7.04 0 1 1 0 14.08z m-1016.388 0H111.46a7.04 7.04 0 1 1 0-14.08h23.803a7.04 7.04 0 1 1 0 14.08z"
        fill={getIconColor(color, 0, '#7ECAFC')}
      />
      <path
        d="M149.356 496.232c-0.699-7.821-7.606-13.593-15.426-12.894a14.627 14.627 0 0 0-9.56 5.065 13.66 13.66 0 0 0-3.179 10.317 14.608 14.608 0 0 0 5.14 9.559 13.088 13.088 0 0 0 9.004 3.381h1.127c7.82-0.7 13.594-7.606 12.894-15.428z m-8.662 11.406a11.53 11.53 0 0 1-12.757-1.399 10.561 10.561 0 0 1-4.052-7.801 11.54 11.54 0 0 1 2.593-8.488 10.578 10.578 0 0 1 7.822-4.054h1.033a11.448 11.448 0 0 1 11.509 10.475 11.53 11.53 0 0 1-6.148 11.267z m1110.56-360.486c-0.968-10.82-10.527-18.81-21.347-17.841a20.222 20.222 0 0 0-13.223 7.008 18.902 18.902 0 0 0-4.402 14.274 20.21 20.21 0 0 0 7.114 13.225 18.108 18.108 0 0 0 12.457 4.68h1.559c10.82-0.966 18.807-10.523 17.842-21.346z m-11.987 15.782a15.956 15.956 0 0 1-17.652-1.935 14.608 14.608 0 0 1-5.608-10.794 15.966 15.966 0 0 1 3.588-11.746 14.64 14.64 0 0 1 10.821-5.609h1.431c8.28-0.074 15.222 6.242 15.922 14.495a15.946 15.946 0 0 1-8.502 15.589z m-996.314-61.22a3.055 3.055 0 0 1-3.055-3.054V78.905l-13.952 13.953a3.132 3.132 0 0 1-4.428-4.428l13.955-13.952h-19.79a3.069 3.069 0 1 1 0-6.14h19.79l-13.955-13.785a2.916 2.916 0 0 1 0-4.428 2.915 2.915 0 0 1 2.215-1.016c0.851 0 1.657 0.37 2.213 1.016l13.952 13.819V44.187a3.051 3.051 0 0 1 4.693-3.165 3.043 3.043 0 0 1 1.278 3.165v19.757l14.09-13.954a2.918 2.918 0 0 1 4.428 0 2.918 2.918 0 0 1 0 4.427l-13.955 13.955h19.756a3.067 3.067 0 1 1 0 6.137h-19.756l13.955 13.956a3.126 3.126 0 0 1 0.81 3.022 3.138 3.138 0 0 1-2.214 2.215 3.135 3.135 0 0 1-3.025-0.813l-14.09-13.985V98.66c0.337 1.711-1.371 3.054-3.05 3.054h0.135zM210.071 926.93h-8.443v-8.445c0-1.405-1.137-2.541-2.541-2.541s-2.541 1.136-2.541 2.54v8.446h-8.444a2.54 2.54 0 1 0 0 5.081h8.444v8.444a2.53 2.53 0 0 0 2.528 2.526l0.026-0.11a2.521 2.521 0 0 0 2.528-2.528v-8.33h8.443a2.542 2.542 0 0 0 0-5.083z m1021.683-57.277c0 16.739-11.335 29.904-25.352 29.904 14.058 0 25.352 13.391 25.352 29.905 0-16.74 11.336-29.905 25.348-29.905-14.058 0-25.348-13.386-25.348-29.904z m0 0"
        fill={getIconColor(color, 1, '#CCCCCC')}
      />
      <path
        d="M988.199 129.231H402.55c-83.281 0-150.446 67.165-150.446 150.445v586.993c0 81.936 67.165 149.095 150.446 149.095h586.992c81.937 0 149.096-67.16 149.096-150.443V279.676c-0.001-83.28-67.16-150.445-150.44-150.445z"
        fill={getIconColor(color, 2, '#DFEFF7')}
      />
      <path
        d="M326.618 866.67V279.675c0-83.28 67.164-150.445 150.446-150.445H402.55c-83.281 0-150.446 67.165-150.446 150.445v586.993c0 81.936 67.165 149.095 150.446 149.095h74.514c-83.282 0-150.446-67.16-150.446-149.095z"
        fill={getIconColor(color, 3, '#C7E6F9')}
      />
      <path
        d="M989.542 1022.804H402.55c-86.838 0-157.486-70.04-157.486-156.135V279.676c0-42.159 16.356-81.733 46.055-111.432S360.39 122.19 402.55 122.19h585.649c42.157 0 81.731 16.356 111.429 46.054 29.696 29.699 46.05 69.272 46.05 111.432v326.868a7.04 7.04 0 1 1-14.08 0V279.676c0-79.073-64.33-143.404-143.4-143.404H402.55c-79.074 0-143.404 64.33-143.404 143.404v586.993c0 78.328 64.33 142.054 143.404 142.054h586.992c78.33 0 142.056-64.33 142.056-143.402v-51.587a7.04 7.04 0 1 1 14.08 0v51.587c0 86.837-70.043 157.483-156.136 157.483z"
        fill={getIconColor(color, 4, '#7ECAFC')}
      />
      <path
        d="M1138.637 709.004a7.04 7.04 0 0 1-7.04-7.04v-58.99a7.04 7.04 0 1 1 14.08 0v58.99a7.04 7.04 0 0 1-7.04 7.04z"
        fill={getIconColor(color, 5, '#7ECAFC')}
      />
      <path
        d="M984.503 648.046L760.536 303.102 435.588 385.09l197.97 372.941z"
        fill={getIconColor(color, 6, '#B1DDFC')}
      />
      <path
        d="M649.672 774.727l-3.397-10.457 310.082-100.484 3.387 10.458z m4.824 23.07l-3.478-10.429 308.286-102.783 3.477 10.429z m-1.203 22.042l-3.482-10.425 312.014-104.212 3.482 10.425z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <path
        d="M985.503 719.036L623.557 841.018l-1-67.989L424.59 402.086c-21.997 16.997-10 50.992-10 50.992l205.967 409.938 9.001-4 0.999 3 362.943-121.981-7.996-21z m0 0"
        fill={getIconColor(color, 8, '#B1DDFC')}
      />
      <path
        d="M738.517 308.07l72.65 109.21-34.565-7.244-16.56 28.977-71.614-117.565z"
        fill={getIconColor(color, 9, '#209AFD')}
      />
    </svg>
  );
};

IconNovel.defaultProps = {
  size: 18,
};

export default IconNovel;
