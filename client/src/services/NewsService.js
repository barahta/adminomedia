import $api from "../http"

export default class NewsService{
    static viewPost(){
        return $api.post('/views/news')
    }
    static createPost(post){
        return $api.post('/views/createpost', {post})
    }
}