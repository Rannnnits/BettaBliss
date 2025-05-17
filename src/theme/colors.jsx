const monochromeColors = {
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  grey: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
};

export {monochromeColors};
