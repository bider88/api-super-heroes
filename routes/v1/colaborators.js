const router = require('express').Router();
const { getMD5 } = require('../../middleware/converToMD5');
const { makeRequest } = require('../../middleware/request');

// These middlewares are to convert the apiKey, timestamp and private key to MD5, after makeRequest will make a request to marvel api
router.all('/*', getMD5, makeRequest);

router.get('/:superheroe', (req, res) => {

  const { superheroe } = req.params;

  res.json({
    ok: true,
    data: req.result.results,
    superheroe
  })

})

module.exports = router;