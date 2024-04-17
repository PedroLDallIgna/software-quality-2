const path = require("path");
module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "public", "js"),
        publicPath: "/",
        filename: "index.bundle.js",
    },
    stats: {
        colors: true,
    },
    mode: "production",
    devtool: "source-map",
};
