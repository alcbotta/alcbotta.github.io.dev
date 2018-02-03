import React, { Component } from 'react';
import Button from 'elements/CustomButton/CustomButton.jsx';

import cppIcon from 'assets/img/c-plus-plus-logo.png';
import opencvIcon from 'assets/img/opencv-logo2.png';
import qtIcon from 'assets/img/Apps-Qt-icon.png';

export const CppButton = () =>
    <Button href="http://www.cplusplus.com/" target="_blank" fill bsStyle="primary">
        <img src={cppIcon} height="32" width="32" alt="" />     C++
</Button>;

export const QtButton = () =>
    <Button href="https://www.qt.io/" target="_blank" fill bsStyle="primary">
        <img src={qtIcon} height="32" width="32" alt="" /> QT
</Button>

export const OpencvButton = () =>
    <Button href="https://opencv.org/" target="_blank" fill bsStyle="primary">
        <img src={opencvIcon} height="32" width="32" alt="" /> OpenCV
                                    </Button>