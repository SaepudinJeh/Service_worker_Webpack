const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,  {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules",
                use: [
                    {
                        loader: "babel_loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        }
                    }
                ]
            }
        ]
    }
});