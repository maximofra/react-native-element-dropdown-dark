import React from 'react';
import { ImageStyle } from 'react-native';
import { IProps } from "../dropdown/model";

interface Props extends IProps {
    imageField: string;
    imageStyle?: ImageStyle;
}

export type SelectCountryProps = React.FC<Props>;