const express = require('express');
const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next) => {console.log('wikiRouter.get')});
wikiRouter.post('/', (req, res, next) => {console.log('wikiRouter.post')});
wikiRouter.get('/add', (req, res, next) => {console.log('wikiRouter.get add')});


module.exports = wikiRouter;
