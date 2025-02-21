import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const BACKGROUND_COLOR = "#0A0A0A" 

export const PAPER_COLOR = "#101010"

export const BUTTON_SX = {
  borderColor: "#2e3539",
  backgroundColor: "#192025"
}

export const CONTRAST_COLOR = "#F7931A"

export const WHITE_COLOR = "#fafafa"

export const DIVIDER_SX = {
    width: "100%", 
    marginBottom: "5px", 
    marginTop: "5px", 
    borderColor: "#2e3539"
};

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: grey[50],
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: CONTRAST_COLOR
      },
      // Provide every color token (light, main, dark, and contrastText) when using
      // custom colors for props in Material UI's components.
      // Then you will be able to use it like this: `<Button color="custom">`
      // (For TypeScript, you need to add module augmentation for the `custom` value)
      custom: {
        main: CONTRAST_COLOR
      },
      text: {
        primary: grey[50]
      },
      white: {
        main: grey[100],
        light: grey[50],
        dark: grey[500]
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    components: {
      MuiPaper:{
        styleOverrides: {
          root:{
            backgroundColor: BACKGROUND_COLOR,
            "&.MuiPopover-paper": {
              borderRadius: "5px",
              border: `solid ${DIVIDER_SX.borderColor}`,
            }
          }
        }
      },
      MuiTypography:{
        styleOverrides: {
          root:{
            color: grey[50]
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root:{
            "&.Mui-disabled": {
              color: grey[400]
            },
            "&.MuiPickersArrowSwitcher-button":{
              color: grey[900]
            },
            "&.MuiPickersCalendarHeader-switchViewButton":{
              color: grey[900]
            }
          }
        }
      },
      MuiTab: {
        styleOverrides: {
            root:{
                color: grey[50],
                "&.Mui-selected": {
                    color: grey[50]
                }
            }
        }
      }
    },
});

export default theme;