var express = require('express');
var router = express.Router();

const copyright = 'Blog do Paulo - 2021';

/* GET home page. */
router.get('/', function(req, res, next) { //meudominio.com
  res.render('index', 
  { 
    title: 'Blog do Paulo', 
    copyright 
  });
});

router.get('/about', function (req, res, next) {
  res.render('about', {title: 'Sobre o autor', copyright })
})

router.get('/posts', function (req, res, next) {
  res.render('posts', {title: 'Meus posts', copyright})
})

router.get('/categories', function (req, res, next) {
  res.render('categories', {title: 'Categorias', copyright})
})

router.get('/contact', function(req, res, next) { //meudominio.com/contact
  res.render('contact', { title: 'Contato', copyright})
})

module.exports = router;
