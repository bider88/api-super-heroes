const router = require('express').Router();
const md5 = require("nodejs-md5");
const request = require('request');
const { handleError } = require('../../utils/errors');

router.get('/:superheroe', (req, res) => {

  const { superheroe } = req.params;

  const ts = Math.floor(new Date().getTime() / 1000);

  md5.string(ts + process.env.SECRET_KEY + process.env.API_KEY + '', function (err, md5) {
    if (err) return handleError(res, 500, err);

    arrayMd5 = md5.split(' ');
    const hash = arrayMd5[arrayMd5.length - 1];

    request.get(`${process.env.MARVEL_API}/comics?apikey=${process.env.API_KEY}&ts=${ts}&hash=${hash}`, function (err, body) {

      if (err) return handleError(res, 500, err);

      res.json({
        ok: true,
        data: body || [],
        superheroe
      })
    });
  });

})

module.exports = router;