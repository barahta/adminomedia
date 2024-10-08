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
    async delMan(req, res, next) {
        try {
            const man = req.body
            const del = await NewsService.delMan(man)
            return res.status(200).json(del)
        } catch (e) {
            next(e)
        }
    }
    async plusVideo(req, res, next) {
        try {
            const video = req.body
            console.log(video)
            const itog = await NewsService.plusVideo(video)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async plusComVak(req, res, next) {
        try {
            const com = req.body
            const itog = await NewsService.plusComVak(com)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async plusComVak(req, res, next) {
        try {
            const com = req.body
            const itog = await NewsService.plusComVak(com)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async getComVak(req, res, next) {
        try {
            const coms = await NewsService.getComVak()
            return res.status(200).json(coms)
        } catch (e) {
            next(e)
        }
    }
    async delComVak(req, res, next) {
        try {
            const com = req.body
            const itog = await NewsService.delComVak(com)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async createVak(req, res, next) {
        try {
            const vak = req.body
            const itog = await NewsService.createVak(vak)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async getVakansii(req, res, next) {
        try {
            const vaks = await NewsService.getVakansii()
            return res.status(200).json(vaks)
        } catch (e) {
            next(e)
        }
    }
    async editVak(req, res, next) {
        try {

            const vak = req.body

            console.log(vak)
            const itog = await NewsService.editVak(vak)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async getAbout(req, res, next) {
        try {
            const com = req.body
            const itog = await NewsService.getAbout(com)
            console.log('контроллер')
            console.log(itog)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async saveAbout(req, res, next) {
        try {
            const about = req.body
            const itog = await NewsService.saveAbout(about)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async plusCompany(req, res, next) {
        try {
            const com = req.body
            const itog = await NewsService.plusCompany(com)
            return res.status(200).json(itog)
        } catch (e) {
            next(e)
        }
    }
    async getGroupCompanyes(req, res, next) {
        try {
            const coms = await NewsService.getGroupCompanyes()
            return res.status(200).json(coms)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new NewsController()