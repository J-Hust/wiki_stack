const express = require('express');
const wikiRouter = express.Router();
const { Page } = require('../models');
const { addPage } = require('../views');

wikiRouter.get('/', (req, res, next) => {
  //res.redirect('/')
});

wikiRouter.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    let myPage = await page.save();
    console.log(myPage);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});

wikiRouter.get('/:slug', (req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = wikiRouter;


