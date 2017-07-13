// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // 解析器
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // 环境配置: 在浏览器中使用eslint
  env: {
    browser: true,
  },
  // 继承(extends)：该配置文件继承了standard规则，具体规则自己看文档，看不懂有中文版的。
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 规则(rules)：对于三个自定义规则
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    // 如果是 2: 违反规则会报错
    // 如果是 1: 违反规则会警告
    // 如果是 off/0: 关闭这个规则
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': 0,
    'handle-callback-err': 0,
    'no-undef': 0
  }
}
