module.exports = {
    devServer: {
        proxy: "http://sales-manager.test"
    },
    outputDir: "../public",
    indexPath:
        process.env.NODE_ENV === "production"
            ? "../resources/views/index.blade.php"
            : "index.html",
    transpileDependencies: ["vuetify"]
};
