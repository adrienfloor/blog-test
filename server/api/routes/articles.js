import express from 'express';
import Article from '../models/article.js';

let router = express.Router();

module.exports = (app) => {

    var article = new Article();

    router.get('/', article.findAll);

    router.get('/:id', article.findById);

    router.post('/', article.create);

    router.put('/:id', article.update);

    router.delete('/:id', article.delete);

    app.use('/articles', router);

}
