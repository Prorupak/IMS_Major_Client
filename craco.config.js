const path = require('path');
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');

module.exports = {
  webpack: {
    alias: {
      // Add the aliases for all the top-level folders in the `src/` folder.
      '~/*': path.join(path.resolve(__dirname, './src/*'))
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        // Jest module mapper which will detect our absolute imports.
        '^Assets(.*)$': '<rootDir>/src/Assets$1',
        '^Components(.*)$': '<rootDir>/src/Components$1',
        '^Routers(.*)$': '<rootDir>/src/routers$1',
        '^Pages(.*)$': '<rootDir>/src/Pages$1',
        '^Redux(.*)$': '<rootDir>/src/Redux$1',
        '^Utils(.*)$': '<rootDir>/src/Utils$1',
        '^Types(.*)$': '<rootDir>/src/Types$1',
        '^Hooks(.*)$': '<rootDir>/src/Hooks$1',
        '^Constants(.*)$': '<rootDir>/src/Constants$1',

        // Another example for using a wildcard character
        '^~(.*)$': '<rootDir>/src$1'
      }
    }
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: configPaths('./tsconfig.paths.json') }
    }
  ]
};
