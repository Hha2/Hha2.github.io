/**
 * THEME PALETTE — edit values here and the whole site updates.
 * Values are mirrored into CSS variables in src/styles.css.
 *
 * Palette:
 *   Eclipse Black    #1B1B1B
 *   Moonlight Gray   #A8A9AD
 *   Astral Blue      #24476C
 *   Midnight Navy    #0A122A
 *   Stardust White   #E6E8E6
 */

export const palette = {
  eclipseBlack: "#1B1B1B",
  moonlightGray: "#A8A9AD",
  astralBlue: "#24476C",
  midnightNavy: "#0A122A",
  stardustWhite: "#E6E8E6",
};

export const lightTheme = {
  paper: palette.stardustWhite,
  ink: palette.eclipseBlack,
  surface: "#EFF0EF",
  surface2: palette.moonlightGray,
  card: "#FFFFFF",
  brand: palette.astralBlue,
  brandContrast: palette.stardustWhite,
  muted: "#4A4A4E",
  hairline: "rgba(27, 27, 27, 0.14)",
};

export const darkTheme = {
  paper: palette.midnightNavy,
  ink: palette.stardustWhite,
  surface: "#131C33",
  surface2: palette.astralBlue,
  card: "#0F1930",
  brand: palette.astralBlue,
  brandContrast: palette.stardustWhite,
  muted: palette.moonlightGray,
  hairline: "rgba(230, 232, 230, 0.14)",
};
