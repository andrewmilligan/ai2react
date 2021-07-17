const path = require('path')

module.exports = {
  stories: ['../src/**/__stories__/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
    // resolve modules
    const mods = config.resolve.modules || []
    config.resolve.modules = [...mods, 'src']

    // resolve aliases
    const aliases = config.resolve.alias || {}
    config.resolve.alias = Object.assign(
      {},
      aliases,
      {
        'ai2react': path.resolve(__dirname, '../src'),
      }
    )

    return config
  },
}
