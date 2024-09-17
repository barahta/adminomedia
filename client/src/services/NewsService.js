import $api from "../http"

export default class NewsService{
    static viewPost(){
        return $api.get('/views/news')
    }
    static createPost(post){
        return $api.post('/views/createpost', {post})
    }
    static getAUP(){
        return $api.get('/views/getaup')
    }
    static plusAUP(post){
        return $api.post('/views/plusaup', {post})
    }
    static delMan(man){
        return $api.post('/views/delman', {man})
    }
    static plusVideo(video){
        return $api.post('/views/plusvideo', {video})
    }

}