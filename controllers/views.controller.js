const NewsService = require('../services/news.service')
const {Files, Developers} = require('../models/models')
// const fs = require('fs');
// const FileDto = require('../dtos/fileDto')
const config = require('config')
const PATH = require('path')
// const DevelopersService = require("../services/developers.service");

class NewsController {
    async getNews(req, res, next) {
        try {
            const news = await NewsService.getNews()
            return res.status(200).json(news)
        } catch (e) {
            next(e)
        }
    }

    async createPost(req, res, next) {
        try {
            const post = req.body
            const news = await NewsService.createPost(post)
            return res.status(200).json(news)
        } catch (e) {
            next(e)
        }
    }
    async plusAUP(req, res, next) {
        try {
            const plus = req.body
            const man = await NewsService.plusAUP(plus)
            return res.status(200).json(man)
        } catch (e) {
            next(e)
        }
    }
    async getAUP(req, res, next) {
        try {
            const mans = await NewsService.getAUP()
            return res.status(200).json(mans)
        } catch (e) {
            next(e)
        }
    }


}

module.exports = new NewsController()