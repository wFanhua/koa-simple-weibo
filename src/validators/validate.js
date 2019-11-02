/**
 * @description json schema 校验
 * @author wfh
 */

const Ajv = require('ajv');

const ajv = new Ajv({
  // allErrors: true, // 输出所有错误
});

/**
 * json schema校验
 * @param {Object} schema 校验规则
 * @param {Object} payload 待校验数据
 * @returns {Array}
 */
function validateSync(schema, payload = {}) {
  const valid = ajv.validate(schema, payload);
  return valid ? [null] : [ajv.errors[0]];
}

module.exports = {
  validateSync,
};
