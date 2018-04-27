const express = require('express');
const wikiRouter = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");



wikiRouter.get('/', (req, res, next) => {
  //res.redirect('/')
});


wikiRouter.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});


wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});




module.exports = wikiRouter;
