/**
 * @description user 数据格式校验
 * @author wfh
 */

const { validateSync } = require('./validate');

const schema = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      pattern: '^[a-zA-Z][a-zA-Z0-0_]+$',
      maxLength: 255,
      minLength: 2,
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 6,
    },
    nickName: {
      type: 'string',
      maxLength: 255,
    },
    gender: {
      type: 'number',
      maximum: 3,
      minimun: 1,
    },
    picture: {
      type: 'string',
      maxLength: 255,
    },
    city: {
      type: 'string',
      maxLength: 255,
      minLength: 2,
    },
  },
};

function userValidate(userInfo) {
  return validateSync(schema, userInfo);
}

module.exports = userValidate;
