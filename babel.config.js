module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ], 
      '@babel/react',
      "module:metro-react-native-babel-preset"
    ],
    plugins: ['@babel/plugin-proposal-class-properties', "@babel/plugin-transform-typeof-symbol", "@babel/plugin-transform-react-jsx"]
  };