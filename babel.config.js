module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import", 
      {
        "libraryName": "xinx", // 组件名
        // "libraryDirectory": "packages" // 组件源码包名
      }
    ]
  ]
}
