module.exports = {
    root: true,
    env: { node: true },
    extends: ['plugin:prettier/recommended'], //定义文件继承的子规范
    rules: {
        'prettier/prettier': 'error',
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': 0,
        // allow es6
        'ecmaVersion': 6
    }
}
