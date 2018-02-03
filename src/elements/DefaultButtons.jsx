import React, { Component } from 'react';
import Button from 'elements/CustomButton/CustomButton.jsx';

import cppIcon from 'assets/img/c-plus-plus-logo.png';
import opencvIcon from 'assets/img/opencv-logo2.png';
import qtIcon from 'assets/img/Apps-Qt-icon.png';
import csharpIcon from 'assets/img/csharp.png';
import javaIcon from 'assets/img/java.png';
import pythonIcon from 'assets/img/python.png';
import cIcon from 'assets/img/clang.png';


//--------------------- hardware
import rpiIcon from 'assets/img/raspberry-pi-logo.png';
import arduinoIcon from 'assets/img/arduino.png';

import armIcon from 'assets/img/arm.jpg';

export const ClangButton = () =>
    <Button fill bsStyle="primary">
        <img src={cIcon} height="32" width="32" alt="" />     C
    </Button>;

export const CppButton = () =>
    <Button href="http://www.cplusplus.com/" target="_blank" fill bsStyle="primary">
        <img src={cppIcon} height="32" width="32" alt="" />     C++
    </Button>;

export const CsharpButton = () =>
    <Button href="https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework" target="_blank" fill bsStyle="primary">
        <img src={csharpIcon} height="32" width="32" alt="" />     C#
    </Button>;

export const JavaButton = () =>
    <Button href="https://java.com/" target="_blank" fill bsStyle="primary">
        <img src={javaIcon} height="32" width="32" alt="" />     Java
    </Button>;

export const PythonButton = () =>
    <Button href="https://www.python.org/" target="_blank" fill bsStyle="primary">
        <img src={pythonIcon} height="32" width="32" alt="" />     Python
    </Button>;

export const QtButton = () =>
    <Button href="https://www.qt.io/" target="_blank" fill bsStyle="primary">
        <img src={qtIcon} height="32" width="32" alt="" /> QT
    </Button>

export const OpencvButton = () =>
    <Button href="https://opencv.org/" target="_blank" fill bsStyle="primary">
        <img src={opencvIcon} height="32" width="32" alt="" /> OpenCV
    </Button>

export const RpiButton = () =>
    <Button href="https://www.raspberrypi.org/" target="_blank" fill bsStyle="primary">
        <img src={rpiIcon} height="32" width="32" alt="" /> Raspberry Pi
    </Button>

export const ArduinoButton = () =>
    <Button href="https://www.arduino.cc/" target="_blank" fill bsStyle="primary">
        <img src={arduinoIcon} height="32" width="32" alt="" /> Arduino
    </Button>

export const ArmButton = () =>
    <Button href="https://www.arm.com/" target="_blank" fill bsStyle="primary">
        <img src={armIcon} height="32" width="32" alt="" /> Arm Contex M3
    </Button>

