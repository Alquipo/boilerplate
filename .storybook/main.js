module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/components/**/stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', "storybook-addon-next-router"],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
