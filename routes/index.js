var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curso Node' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Página de contatos'})
})

module.exports = router;
