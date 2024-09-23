import style from './styles/News.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import Navigation from "../components/nav/Nav";
import {Link, useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";
import NewsService from "../services/NewsService";
import {useMessage} from "../hooks/message.hook";
import BigModal from "../components/modalwin/BigModal";
import OpenPost from "../components/news/OpenPost";
import CreatePost from "../components/news/CreatePost";
import NewsPost from "../components/news/NewsPost";
import CreateGroupCom from "../components/forms/CreateGroupCom";

function Group () {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const company = params.get('com');
    const message = useMessage();
    const [data, setData] = useState('')
    const [activemodal, setActivemodal] = useState(false)
    const [news, setNews] = useState([])
    const [openPost, setOpenPost] = useState(false)
    const [thisPost, setThisPost] = useState({})

    const getGroupCompanyes = async () => {
        try{
            const {data} = await NewsService.getGroupCompanyes()
            const posts = data.reverse()
            console.log(posts)
            setNews(posts)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getGroupCompanyes()
    },[activemodal,openPost])
    return (
        <div className={style.bodymain}>
            <BigModal data={<OpenPost thisPost={thisPost} setActivemodal={setOpenPost}/>} activemodal={openPost} setActivemodal={setOpenPost} setData={setData}/>
            <BigModal data={<CreateGroupCom news={data} setActivemodal={setActivemodal}/>} activemodal={activemodal} setActivemodal={setActivemodal} setData={setData}/>
            <HeaderMain page={'./Новости'}/>
            <div className={style.main}>
                <div className={style.leftpath}>
                    <Navigation />
                </div>
                <div className={style.centerpath}>
                    <div className={style.nav}>
                        <Link to={`/company?com=${company}`} className={style.back}>
                            <i className="fa-solid fa-rotate-left"/>
                            <div className={style.namebtn}>Назад</div>
                        </Link>
                        <div className={style.pluspost} onClick={()=>setActivemodal(true)}>
                            <i className="fa-solid fa-plus"/>
                            <div className={style.namebtn}>Добавить новость</div>
                        </div>
                    </div>

                    {news.map((com, indexcom)=>(
                        <div key={indexcom} className={style.companygroup}>
                            <div key={indexcom} className={style.group_left}>
                                <img src={`${com.logo}`} alt="" height='300px'/>
                                {com.name}</div>
                            <div key={indexcom} className={style.group_center}>
                                <div key={indexcom} className={style.group_center_name}>{com.name}</div>
                                <div key={indexcom} className={style.group_center_desc}>{com.desc}</div>
                            </div>
                            <div key={indexcom} className={style.group_right}>
                                <div key={indexcom} className={style.group_right_edit}>{com.name}</div>
                                <div key={indexcom} className={style.group_right_position}>{com.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.rightpath}></div>
            </div>


        </div>
    )
}

export default Group