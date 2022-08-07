import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// https://nekocalc.com/px-to-rem-converter
export const fontSize = {
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    htmlFontSize: 14,
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: (factor) =>
    [
      // value in rem // value in pixel // index
      '0.125rem', // 2px // 0
      '0.25rem', // 4px // 1
      '0.5rem', // 8px // 2
      '0.75rem', // 12px // 3
      '1rem', // 16px // 4
      '1.25rem', // 20px // 5
      '1.5rem', // 24px // 6
      '1.75rem', // 28px // 7
      '2rem', // 32px // 8
      '2.25rem', // 36px // 9
      '2.5rem', // 40px // 10
      '2.75rem', // 44px // 11
      '3rem', // 48px // 12
    ][factor],
})

export default theme
