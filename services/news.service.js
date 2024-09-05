
const config = require('config')
const {News} = require('../models/models')

class NewsService {
    async getNews(){
        try{
            return await News.findAll()
        }catch(e){
            console.log(e)
        }

    }


}
module.exports = new NewsService()
