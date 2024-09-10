import style from './Companies.module.scss'
import BigModal from "../modalwin/BigModal";
import CreateCom from "./CreateCom";
import {useState, useEffect} from "react";

function Companies (){

    const [activemodal, setActivemodal] = useState(false)
    const [data, setData] = useState('')
    const [newcom, setNewcom] = useState('')
    const plusCompany = () => {
        setActivemodal(true)
    }
    const getCompanies = async () => {
        try{

        }catch(e){

        }
    }
    useEffect(()=>{
        getCompanies()
    },[newcom])
    return (
        <div className={style.main}>

            <BigModal data={<CreateCom setNewcom={setNewcom} setActivemodal={setActivemodal}/>} activemodal={activemodal} setActivemodal={setActivemodal} setData={setData}/>
            <div className={style.company}>
                <img src="/files/companies/hopekids.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/reafarm.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/hopefitness.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/aviatech.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/24surgut.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/thekitcha.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/verniydrug.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.company}>
                <img src="/files/companies/traektoriya.svg" alt=""/>
                <div className={style.active}></div>
            </div>
            <div className={style.companyplus} onClick={plusCompany}>
                <i className="fa-solid fa-plus"/>
                <div className={style.active}></div>
            </div>

        </div>
    )
}

export default Companies