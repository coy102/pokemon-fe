import { css } from '@emotion/react'

const globalCss = css`
  html,
  body {
    overflow-x: hidden;
  }
  * {
    fontfamily: Inter, sans-serif;
  }
  .textWrap {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export default globalCss
