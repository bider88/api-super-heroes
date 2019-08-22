const buildURL= (type, offset, limit, ts, hash) => {
  let url = `${process.env.MARVEL_API}/${type}?apikey=${process.env.API_KEY}&ts=${ts}&hash=${hash}`;
  url += offset > 0 ? `&offset=${offset}`: '';
  url += limit > 0 ? `&limit=${limit}` :  '';
  return url;
}

const getOffset = (req) => {
  let offset = req.query.offset || 0;
  offset = Number(offset);
  offset = isNaN(offset) ? 0 : offset;
  return offset;
}

const getLimit = (req) => {
  let limit = req.query.limit || 0;
  limit = Number(limit);
  limit = isNaN(limit) ? 0 : limit;
  return limit;
}

const getTypeRequest = (req) => {
  const baseUrl = req.baseUrl;
  const pos = baseUrl.lastIndexOf('/') + 1;
  const type = baseUrl.slice(pos, baseUrl.lenght);
  return type;
}

module.exports = {
  buildURL,
  getOffset,
  getLimit,
  getTypeRequest
}