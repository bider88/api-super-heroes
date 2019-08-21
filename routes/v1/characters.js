const router = require('express').Router();

router.get('/characters/:superheroe', (req, res) => {

  const { superheroe } = req.params;

  Vacancy.find({experience: superheroe}, (err, postulateDB) => {
    if (err) return handleError(res, 500, err);

    res.json({
      ok: true,
      data: postulateDB || []
    })
  })

})

module.exports = router;