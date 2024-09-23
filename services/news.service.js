
const config = require('config')
const {News, Developers, AUPs, VakCompanies, Vakansii, About, GroupsComs} = require('../models/models')
const ApiError = require("../exceptions/api.error");
const {Sequelize} = require('sequelize')
class NewsService {
    async getNews(){
        try{
            const news = await News.findAll()
            console.log(news)
            return news
        }catch(e){
            console.log(e)
        }

    }

    async createPost(post){
        console.log(post)
        const name = post.post.name
        const desc = post.post.desc
        const text = post.post.text
        const image = post.post.image
        const publ = post.post.public
        try{
            const post = await News.create({title: name, desc: desc, image: image, public: publ, text: text })
            return post
        }catch(e){
            console.log(e)
        }


    }

    async getAUP(){
        try{
            const mans = await AUPs.findAll()
            return mans
        }catch(e){
            console.log(e)
        }

    }
    async plusAUP(plus){
        console.log(plus)
        const firstname = plus.post.firstname
        const secondname = plus.post.secondname
        const lastname = plus.post.lastname
        const developer = plus.post.developer
        const email = plus.post.email
        const image = plus.post.image
        try{
            const man = await AUPs.create({firstname: firstname, secondname: secondname, lastname: lastname, developers: developer, email: email, image: image })
            return man
        }catch(e){
            console.log(e)
        }
        return ''

    }
    async delMan(man){
        console.log(man)
        const idman = +man.man.id
        console.log(idman)
        const deleted = await AUPs.findByPk(idman)
        return await deleted.destroy()
    }
    async plusVideo(video){
        return ''
    }

    async plusComVak(com){
        const name = com.com.name
        const category = com.com.category
        try{
            const comvak = await VakCompanies.create({name: name, category: category})
            return comvak
        }catch(e){
            console.log(e)
        }

    }
    async getComVak(){
        try{
            const coms = await VakCompanies.findAll()
            return coms
        }catch(e){
            console.log(e)
        }

    }
    async delComVak(com){
        console.log(com)
        const idcom = +com.com.com.id
        console.log(idcom)
        const deleted = await VakCompanies.findByPk(idcom)
        return await deleted.destroy()
    }
    async createVak(vak){
        const name = vak.vak.name
        const respon = vak.vak.respon
        const requierments = vak.vak.requierments
        const conditions = vak.vak.conditions
        const keyskills = vak.vak.keyskills
        const company = vak.vak.company
        const email = vak.vak.email
        try{
            const itog = await Vakansii.create({name: name, respon:respon,requierments:requierments,conditions:conditions,keyskills:keyskills,company:company,email:email})
            return itog
        }catch(e){
            console.log(e)
        }

    }
    async getVakansii(){
        try{
            const vaks = await Vakansii.findAll()
            return vaks
        }catch(e){
            console.log(e)
        }
    }
    async editVak(vak){
        console.log(vak)
        const vak_id = vak.vak.id
        const name = vak.vak.name
        const respon = vak.vak.respon
        const requierments = vak.vak.requierments
        const conditions = vak.vak.conditions
        const keyskills = vak.vak.keyskills
        const company = vak.vak.company
        const email = vak.vak.email
        try{
            const thisvak = await Vakansii.findByPk(vak_id)
            thisvak.name = name
            thisvak.respon = respon
            thisvak.requierments = requierments
            thisvak.conditions = conditions
            thisvak.keyskills = keyskills
            thisvak.company = company
            thisvak.email = email
            await thisvak.save()
            return thisvak
        }catch(e){
            console.log(e)
        }

    }

    async getAbout(com){

        try{
            const search = await About.findOne({where: {company: com.com.company}})
            console.log(search)
            if(search){
                return search
            }else{
                const itog = await About.create({text: '', company:com.com.company})
                return itog
            }
        }catch(e){

        }
    }
    async saveAbout(about){
        console.log(about)
        try{
            const search = await About.findOne({where: {company: about.about.company}})
            search.text = about.about.text
            await search.save()
            return search
        }catch(e){

        }
    }
    async plusCompany(com){
        console.log(com)
        const name = com.com.name
        const desc = com.com.desc
        const contacts = com.com.contacts
        const site = com.com.site
        const logo = com.com.logo
        const image = com.com.image
        const number = com.com.number
        try{
            const itog = await GroupsComs.create({name,desc,contacts,site,logo,image,number})
            return itog
        }catch(e){
            console.log(e)
        }
    }
    async getGroupCompanyes(){
        try{
            const coms = await GroupsComs.findAll()
            return coms
        }catch(e){
            console.log(e)
        }
    }


}
module.exports = new NewsService()
