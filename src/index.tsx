import React from 'react';
import { Image, ImageProps, StyleSheet } from 'react-native';

export interface DesignOverlayProps extends Omit<ImageProps, 'source'> {
  source: string;
  opacity: number;
}

const DesignOverlay = ({
  source,
  style,
  opacity,
  ...props
}: DesignOverlayProps) => {
  return (
    <Image
      style={StyleSheet.flatten([styles.image, { opacity }, style])}
      source={require(source)}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DesignOverlay;
