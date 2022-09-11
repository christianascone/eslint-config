'use strict'

const eslint = require('eslint')
const assert = require('assert')
const conf = require('../')

// The source files to lint.
const repoFiles = [
  'index.js',
  'test/test.js'
]

describe('eslint-config', () => {
  const eslintOpts = {
    overrideConfig: {
      env: {'node': true, 'es6': true},
      parserOptions: {ecmaVersion: 'latest'},
      rules: conf.rules
    },
    useEslintrc: false
  }
  it(`checks files are compliant to rules`, async () => {
    const report = await new eslint.ESLint(eslintOpts).lintFiles(repoFiles)
    report.forEach((file) => {
      assert.equal(file.errorCount, 0)
      assert.equal(file.warningCount, 0)
    })
    repoFiles.forEach((file, index) => {
      assert(report[index].filePath.endsWith(file))
    })
  })
})
