var path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    externals: {
        base64: 'Base64',
        inboxsdk: 'InboxSDK',
        mime: 'Mime'
    },

    entry: {
        app: './src/app/app.js',
        background: './src/app/background.ts',
        popup: './src/ui/popup.tsx',
        inboxsdk: './src/inboxsdk.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
              }
            ]
          }
};
