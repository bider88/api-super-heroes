const { handleError } = require('../utils/errors');
const request = require('request');
const { buildURL, getOffset, getLimit, getTypeRequest } = require('../utils/utils');

// Middleware that it will make a request to marvel api
const makeRequest = (req, res, next) => {

  const offset = getOffset(req);
  const limit = getLimit(req);
  const ts = req.ts;
  const hash = req.hash;

  const type = getTypeRequest(req);

  const url = buildURL(type === 'colaborators' ? 'creators' : 'characters', offset, limit, ts, hash);

  request.get(url, function (err, data) {

    if (err) return handleError(res, 500, err);
    const result = JSON.parse(data.body)
    req.result = result ? result.data : [];
    next();
  });
}

module.exports = {
  makeRequest
}