import { configure, addDecorator, addParameters } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from '@material-ui/styles'

import theme from '../src/styles/theme'

withOptions({
  theme: {
    brandTitle: 'Next.js TypeScript Boilerplate',
  },
  showPanel: true,
})

const MaterialUIDecorator = (storiesFn) => (
  <ThemeProvider theme={theme}>{storiesFn()}</ThemeProvider>
)

addParameters({
  backgrounds: [
    { name: 'default', value: '#eceff1', default: true },
    { name: 'dark', value: '#37474f' },
  ],
})

addDecorator(withKnobs)
addDecorator(MaterialUIDecorator)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module)
