const darkColors = {
  black: "#111111",
  grayDark: "#282A36",
  gray: "#6C6C6C",
  grayLight: "#EFF0EB",
  pink: "#FF6AC1",
  orange: "#FF5C57",
  blue: "#55C2F8",
  green: "#5AF78E"
};

const lightColors = {
  dark: "#463F2B",
  sandDark: "#DCD6C6",
  sand: "#FDF6E3",
  gray: "#7D8E92",
  yellow: "#CCB166",
  orange: "#ff4800",
  blue: "#5293d8",
  green: "#1fe977"
};

export const theme = {
  dark: {
    primaryColor: darkColors.blue,
    secondaryColor: darkColors.green,
    ternaryColor: darkColors.pink,
    textColor: darkColors.grayLight,
    borderColor: darkColors.gray,
    bgColor: darkColors.grayDark
  },
  light: {
    primaryColor: lightColors.blue,
    secondaryColor: lightColors.gray,
    ternaryColor: lightColors.pink,
    textColor: lightColors.yellow,
    borderColor: lightColors.sandDark,
    bgColor: lightColors.sand
  }
};
