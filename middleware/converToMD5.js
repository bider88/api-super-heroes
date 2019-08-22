const { handleError } = require('../utils/errors');
const md5 = require("nodejs-md5");

const getMD5 = (req, res, next) => {
  const ts = Math.floor(new Date().getTime() / 1000);

  md5.string(ts + process.env.SECRET_KEY + process.env.API_KEY + '', function (err, md5) {
    if (err) return handleError(res, 500, err);

    arrayMd5 = md5.split(' ');
    req.hash = arrayMd5[arrayMd5.length - 1];
    req.ts = ts;
    next();
  });
}

module.exports = {
  getMD5
}