var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Column extends Component {

  createClassName() {
    return [styles.column, styles[this.props.size], styles[this.props.offset], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'div',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Column.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  isMultiline: PropTypes.bool,
  size: PropTypes.oneOf(['is1', 'is2', 'is3', 'is4', 'is5', 'is6', 'is7', 'is8', 'is9', 'is10', 'is11', 'is12', 'isThreeQuarters', 'isTwoThirds', 'isHalf', 'isOneThird', 'isOneQuarter', 'isThreeQuartersMobile', 'isTwoThirdsMobile', 'isHalfMobile', 'isOneThirdMobile', 'isOneQuarterMobile', 'isThreeQuartersTablet', 'isTwoThirdsTablet', 'isHalfTablet', 'isOneThirdTablet', 'isOneQuarterTablet', 'isThreeQuartersDesktop', 'isTwoThirdsDesktop', 'isHalfDesktop', 'isOneThirdDesktop', 'isOneQuarterDesktop', 'isThreeQuartersWidescreen', 'isTwoThirdsWidescreen', 'isHalfWidescreen', 'isOneThirdWidescreen', 'isOneQuarterWidescreen', 'isNarrow', 'isNarrowMobile', 'isNarrowTablet', 'isNarrowDesktop', 'isNarrowWidescreen', 'isFull', 'isFullMobile', 'isFullTablet', 'isFullDesktop', 'isFullWidescreen']),
  offset: PropTypes.oneOf(['isOffsetThreeQuarters', 'isOffsetTwoThirds', 'isOffsetHalf', 'isOffsetOneThird', 'isOffsetOneQuarter', 'isOffset1', 'isOffset2', 'isOffset3', 'isOffset4', 'isOffset5', 'isOffset6', 'isOffset7', 'isOffset8', 'isOffset9', 'isOffset10', 'isOffset11', 'isOffset12', 'isOffset1Mobile', 'isOffset2Mobile', 'isOffset3Mobile', 'isOffset4Mobile', 'isOffset5Mobile', 'isOffset6Mobile', 'isOffset7Mobile', 'isOffset8Mobile', 'isOffset9Mobile', 'isOffset10Mobile', 'isOffset11Mobile', 'isOffset12Mobile', 'isOffset1Tablet', 'isOffset2Tablet', 'isOffset3Tablet', 'isOffset4Tablet', 'isOffset5Tablet', 'isOffset6Tablet', 'isOffset7Tablet', 'isOffset8Tablet', 'isOffset9Tablet', 'isOffset10Tablet', 'isOffset11Tablet', 'isOffset12Tablet', 'isOffset1Desktop', 'isOffset2Desktop', 'isOffset3Desktop', 'isOffset4Desktop', 'isOffset5Desktop', 'isOffset6Desktop', 'isOffset7Desktop', 'isOffset8Desktop', 'isOffset9Desktop', 'isOffset10Desktop', 'isOffset11Desktop', 'isOffset12Desktop', 'isOffset1Widescreen', 'isOffset2Widescreen', 'isOffset3Widescreen', 'isOffset4Widescreen', 'isOffset5Widescreen', 'isOffset6Widescreen', 'isOffset7Widescreen', 'isOffset8Widescreen', 'isOffset9Widescreen', 'isOffset10Widescreen', 'isOffset11Widescreen', 'isOffset12Widescreen'])
};