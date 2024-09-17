
const config = require('config')
const {News, Developers, AUPs} = require('../models/models')
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
        console.log(video)
        return ''
    }


}
module.exports = new NewsService()
