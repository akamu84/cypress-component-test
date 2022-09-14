import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        mode: 'development',
        devtool: false,
        module: {
          rules: [
            {
              test: /\.(ts|js)x?$/,
              exclude: /node_modules\/(?!react-router-dom)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ["@babel/preset-typescript", '@babel/preset-env', ["@babel/preset-react", {runtime: "automatic"}] ],
                  plugins: [
                      ['@babel/plugin-transform-modules-commonjs', {
                        loose: true,
                  }],
                  ],
                },
              }
            }
          ]
        }
      }
    },
  },
});
