import style from './styles/Packets.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import Navigation from "../components/nav/Nav";
import {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import BigModal from "../components/modalwin/BigModal";
import {useMessage} from "../hooks/message.hook";
import NewsService from "../services/NewsService";
import EditPack from "../components/forms/EditPack";
import PlusZones from "../components/forms/PlusZones";


function Zones () {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const company = params.get('com');
    const message = useMessage();
    const [data, setData] = useState('')
    const [editact, setEditact] = useState(false)
    const [plusPack, setPlusPack] = useState(false)
    const [plusZone, setPlusZone] = useState(false)
    const [editPack, setEditPack] = useState(false)
    const [list, setList] = useState([])

    const getZones = async () => {
        try{
            const {data} = await NewsService.getZones({capter: company})
            console.log(data)
            if(data){

            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getZones()
    }, [plusZone])

    return (
        <div className={style.bodymain}>
            <BigModal data={<PlusZones com={company} setActivemodal={setPlusZone}/>} activemodal={plusZone} setActivemodal={setPlusZone} setData={setData}/>
            <BigModal data={<EditPack pack={data} setPack={setData} com={company} setActivemodal={setEditPack}/>} activemodal={editPack} setActivemodal={setEditPack} setData={setData}/>
            <HeaderMain page={`./${company}`}/>
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
                        <div className={style.pluspost} onClick={()=>setPlusPack(true)}>
                            <i className="fa-solid fa-plus"/>
                            <div className={style.namebtn}>Добавить Зону</div>
                        </div>
                    </div>
                    <div className={style.zones}>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Zones