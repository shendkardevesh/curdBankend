var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  userCtrl.find()
    .then(response => {
      res.jsonp(response);
      // next();
    })
    .catch(err => {
      // res.json(err);
      res.status(400).send({error: err});
    });
});
router.post('/', function(req, res, next) {
  userCtrl.insert(req.body)
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      // res.json(err);
      res.status(400).send({error: err});
    });
});
router.put('/:id', function(req, res, next) {
  userCtrl.update(req.params.id, req.body)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      // res.json(err);
      res.status(400).send({error: err});
    });
});
router.delete('/:id', function(req, res, next) {
  userCtrl.delete(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      // res.json(err);
      res.status(400).send({error: err});
    })
})
module.exports = router;
