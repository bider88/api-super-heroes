const router = require('express').Router();
const { getMD5 } = require('../../middleware/converToMD5');
const { makeRequest } = require('../../middleware/request');

router.all('/*', getMD5, makeRequest);

router.get('/:superheroe', (req, res) => {

  const { superheroe } = req.params;

  res.json({
    ok: true,
    data: req.result,
    superheroe
  })

})

module.exports = router;