import style from './styles/News.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import Navigation from "../components/nav/Nav";
import NewsPost from "../components/news/NewsPost";
import {useEffect, useState} from "react";
import BigModal from "../components/modalwin/BigModal";
import CreatePost from "../components/news/CreatePost";
import NewsService from "../services/NewsService";
import OpenPost from "../components/news/OpenPost";

function News () {

    const [data, setData] = useState('')
    const [activemodal, setActivemodal] = useState(false)
    const [news, setNews] = useState([])
    const [openPost, setOpenPost] = useState(false)
    const [thisPost, setThisPost] = useState({})

    const getNews = async () => {
        try{
            const {data} = await NewsService.viewPost()
            const posts = data.reverse()
            console.log(posts)
            setNews(posts)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getNews()
    },[activemodal,openPost])
    return (
        <div className={style.bodymain}>
            <BigModal data={<OpenPost thisPost={thisPost} setActivemodal={setOpenPost}/>} activemodal={openPost} setActivemodal={setOpenPost} setData={setData}/>
            <BigModal data={<CreatePost news={data} setActivemodal={setActivemodal}/>} activemodal={activemodal} setActivemodal={setActivemodal} setData={setData}/>
            <HeaderMain page={'./Новости'}/>
            <div className={style.main}>
                <div className={style.leftpath}>
                    <Navigation />
                </div>
                <div className={style.centerpath}>
                    <div className={style.pluspost} onClick={()=>setActivemodal(true)}>
                        <i className="fa-solid fa-plus"/>
                        <div className={style.namebtn}>Добавить новость</div>
                    </div>
                    {news.map((post, index)=>(
                        <NewsPost post={post} key={index} setOpenPost={setOpenPost} setThisPost={setThisPost}/>
                    ))}
                </div>
                <div className={style.rightpath}></div>
            </div>


        </div>
    )
}

export default News