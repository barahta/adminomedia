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
    static plusComVak(com){
        return $api.post('/views/pluscomvak', {com})
    }
    static getComVak(){
        return $api.get('/views/getcomvak')
    }
    static delComVak(com){
        return $api.post('/views/delcomvak', {com})
    }
    static createVak(vak){
        return $api.post('/views/createvak', {vak})
    }
    static getVakansii(){
        return $api.get('/views/getvakansii')
    }
    static editVak(vak){

        console.log(vak)
        return $api.post('/views/editvak', {vak})
    }

}