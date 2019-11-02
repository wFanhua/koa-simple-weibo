function toSuccessRes(payload) {
  return {
    errno: 0,
    data: payload,
  };
}

function toFailRes(errno, message) {
  return {
    errno,
    message,
  };
}

module.exports = {
  toSuccessRes,
  toFailRes,
};
