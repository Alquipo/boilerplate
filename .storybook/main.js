module.exports = {
  stories: ['../src/components/**/stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    builder: "webpack5"
  }
}


