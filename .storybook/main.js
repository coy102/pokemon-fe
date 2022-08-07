const path = require('path')

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-options',
    '@storybook/addon-backgrounds',
  ],
  webpackFinal: async (baseConfig) => {
    const { module = {} } = baseConfig

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    }

    // TypeScript with Next.js
    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../stories'),
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: [],
          },
        },
      ],
    })
    newConfig.resolve.extensions.push('.ts', '.tsx')

    return newConfig
  },
}
