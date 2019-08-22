// Here, the url will be builded
const buildURL= (type, offset, limit, ts, hash) => {
  let url = `${process.env.MARVEL_API}/${type}?apikey=${process.env.API_KEY}&ts=${ts}&hash=${hash}`;
  url += offset > 0 ? `&offset=${offset}`: '';
  url += limit > 0 ? `&limit=${limit}` :  '';
  return url;
}

// Verify the url if it has a offset as query param
const getOffset = (req) => {
  let offset = req.query.offset || 0;
  offset = Number(offset);
  offset = isNaN(offset) ? 0 : offset;
  return offset;
}

// Verify the url if it has a limit as query param
const getLimit = (req) => {
  let limit = req.query.limit || 0;
  limit = Number(limit);
  limit = isNaN(limit) ? 0 : limit;
  return limit;
}

// Verify the base url in order to determinate the request to marvil api
const getTypeRequest = (req) => {
  const baseUrl = req.baseUrl;
  const pos = baseUrl.lastIndexOf('/') + 1;
  const type = baseUrl.slice(pos, baseUrl.lenght);
  return type;
}

// Those functions are exported
module.exports = {
  buildURL,
  getOffset,
  getLimit,
  getTypeRequest
}