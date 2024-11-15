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
    async updateManAUP(req, res, next) {
        try {

            const plus = req.body
            console.log(plus)
            const man = await NewsService.updateManAUP(plus)
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
    async delTisVak(req, res, next) {
        try {

            const vak = req.body

            console.log(vak)
            const itog = await NewsService.delTisVak(vak)
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
    async delComGroup(req, res, next) {
        try {
            const com = req.body
            const del = await NewsService.delComGroup(com)
            return res.status(200).json(del)
        } catch (e) {
            next(e)
        }
    }
    async editСomGroup(req, res, next) {
        try {
            const com = req.body
            const edit = await NewsService.editСomGroup(com)
            return res.status(200).json(edit)
        } catch (e) {
            next(e)
        }
    }
    async updatePosComGroup(req, res, next) {
        try {
            const com = req.body
            const edit = await NewsService.updatePosComGroup(com)
            return res.status(200).json(edit)
        } catch (e) {
            next(e)
        }
    }
    async getPlaces(req, res, next) {
        try {
            const act = req.body
            const places = await NewsService.getPlaces(act)
            return res.status(200).json(places)
        } catch (e) {
            next(e)
        }
    }
    async plusPlaces(req, res, next) {
        try {
            const place = req.body
            const plus = await NewsService.plusPlaces(place)
            return res.status(200).json(plus)
        } catch (e) {
            next(e)
        }
    }
    async delPlace(req, res, next) {
        try {
            const id = req.body
            const del = await NewsService.delPlace(id)
            return res.status(200).json(del)
        } catch (e) {
            next(e)
        }
    }
    async createpack(req, res, next) {
        try {
            const pack = req.body
            const newpack = await NewsService.createpack(pack)
            return res.status(200).json(newpack)
        } catch (e) {
            next(e)
        }
    }
    async getAllPacks(req, res, next) {
        try {
            const capter = req.body
            const list = await NewsService.getAllPacks(capter)
            return res.status(200).json(list)
        } catch (e) {
            next(e)
        }
    }
    async editPrioryPack(req, res, next) {
        try {
            const priory = req.body
            const itogy = await NewsService.editPrioryPack(priory)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async updatePack(req, res, next) {
        try {
            const pack = req.body
            const itogy = await NewsService.updatePack(pack)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async createImgGallery(req, res, next) {
        try {
            const img = req.body
            const itogy = await NewsService.createImgGallery(img)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async getGalleryImgs(req, res, next) {
        try {
            const capter = req.body
            const itogy = await NewsService.getGalleryImgs(capter)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async getCities(req, res, next) {
        try {
            const capter = req.body
            const itogy = await NewsService.getCities(capter)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async createCity(req, res, next) {
        try {
            const contact = req.body
            const itogy = await NewsService.createCity(contact)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async uploadStaticContact(req, res, next) {
        try {
            const contact = req.body
            const itogy = await NewsService.uploadStaticContact(contact)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async plusContactParam(req, res, next) {
        try {
            const contact = req.body
            const itogy = await NewsService.plusContactParam(contact)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async createZone(req, res, next) {
        try {
            const zone = req.body
            const itogy = await NewsService.createZone(zone)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }
    async getZones(req, res, next) {
        try {
            const capter = req.body
            const itogy = await NewsService.getZones(capter)
            return res.status(200).json(itogy)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new NewsController()