import style from './CreateVakStyle.module.scss'
import NewsService from "../../services/NewsService";
import {useEffect, useState} from "react";
import {useMessage} from "../../hooks/message.hook";

function CreateVak({setActivemodal}){

    const message = useMessage();

    const [mainName, setMainName] = useState('')
    const [allcoms, setAllcoms] = useState([])
    const [respon, setRespon] = useState('')
    const [allrespon, setAllRespon] = useState([])
    const [requierments, setRequierments] = useState('')
    const [allrequierments, setAllRequierments] = useState([])
    const [conditions, setConditions] = useState('')
    const [allconditions, setAllConditions] = useState([])
    const [keyskills, setKeyskills] = useState('')
    const [allkeyskills, setAllKeyskills] = useState([])
    const [company, setCompany] = useState( 'Omedia')
    const [email, setEmail] = useState('')

    const createVak = async () => {
        try {
            if(mainName.length<2){
                message('Введите название вакансии')
            }else if(email.length<2){
                message('Укажите эл.почту на которую будет приходить Отклик')
            }else{
                const {data} = await NewsService.createVak({name: mainName, respon:allrespon, requierments:allrequierments, conditions:allconditions, keyskills:allkeyskills, company:company, email:email})
                if(data){
                    setActivemodal(false)
                    message(`О! Вакансия "${mainName}" успешно добавлена`)
                    setMainName('')
                    setRespon('')
                    setAllRespon([])
                    setRequierments('')
                    setAllRequierments([])
                    setConditions('')
                    setAllConditions([])
                    setKeyskills('')
                    setAllKeyskills([])
                    setCompany('')
                    setEmail('')
                }else{
                    message('Что-то пошло не так... Попробуйте еще раз')
                }
            }
        }catch(e){
            console.log(e)
        }
    }

    const delParams = (column, index) =>{
        let newarr
        if(column === 'respon'){
            newarr = [...allrespon]
            newarr.splice(index, 1);
            setAllRespon(newarr)
            message('Требование Удалено')
        }
        if(column === 'requierments'){
            newarr = [...allrequierments]
            newarr.splice(index, 1);
            setAllRequierments(newarr)
            message('Обязанность Удалена')
        }
        if(column === 'conditions'){
            newarr = [...allconditions]
            newarr.splice(index, 1);
            setAllConditions(newarr)
            message('Условие Удалено')
        }
        if(column === 'keyskills'){
            newarr = [...allkeyskills]
            newarr.splice(index, 1);
            setAllKeyskills(newarr)
            message('Ключевой навык Удален')
        }
    }

    const plusParams = (column)=>{
        let newarr
        if(column === 'respon' && respon.length > 2){
            newarr = [...allrespon]
            newarr.push(respon)
            setAllRespon(newarr)
            message('О! Требование добавлено')
            setRespon('')
        }else if(column === 'respon' && respon.length <= 2){
            message('Вы не ввели требование')
        }
        if(column === 'requierments' && requierments.length > 2){
            newarr = [...allrequierments]
            newarr.push(requierments)
            setAllRequierments(newarr)
            message('О! Обязанность добавлена')
            setRequierments('')
        }else if(column === 'requierments' && requierments.length <= 2){
            message('Вы не ввели обязанность')
        }
        if(column === 'conditions' && conditions.length > 2){
            newarr = [...allconditions]
            newarr.push(conditions)
            setAllConditions(newarr)
            message('О! Условие добавлено')
            setConditions('')
        }else if(column === 'conditions' && conditions.length <= 2){
            message('Вы не ввели условие')
        }
        if(column === 'keyskills' && keyskills.length > 2){
            newarr = [...allkeyskills]
            newarr.push(keyskills)
            setAllKeyskills(newarr)
            message('О! Ключевой навык добавлен')
            setKeyskills('')
        }else if(column === 'keyskills' && keyskills.length <= 2){
            message('Вы не ввели ключевой навык')
        }
    }

    const getVakCompany = async()=>{
        try {
            const {data}=await NewsService.getComVak()
            setAllcoms(data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getVakCompany()
    }, [])

    return(
        <div className={style.main}>
            <div className={style.title}>Укажите название новой вакансии</div>
            <div className={style.standart}>
                <input className={style.name} value={mainName} onChange={(e)=>setMainName(e.target.value)} placeholder='Наименование вакансии'/>
                <select value={company} onChange={(e) => setCompany(e.target.value)}>
                    {allcoms.map((com, indexcom)=>(
                        <option key={indexcom}>{com.name}</option>
                    ))}

                </select>
            </div>

            <div className={style.columns}>
                <div className={style.tab}>
                    <div className={style.titletab}>Требования</div>
                    <input className={style.name} value={respon} onChange={(e)=>setRespon(e.target.value)}/>
                    <div className={style.btntab} onClick={()=>plusParams('respon')}>Добавить</div>
                    <div className={style.points}>
                        {allrespon.map((respon, indexres)=>(
                            <div key={indexres} className={style.point}>
                                <div className={style.coma}></div>
                                <div className={style.text}>{respon}</div>
                                <div className={style.trash}><i className="fa-solid fa-trash" onClick={()=>delParams('respon', indexres)}/></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.tab}>
                    <div className={style.titletab}>Обязанности</div>
                    <input className={style.name} value={requierments} onChange={(e)=>setRequierments(e.target.value)}/>
                    <div className={style.btntab} onClick={()=>plusParams('requierments')}>Добавить</div>
                    <div className={style.points}>
                        {allrequierments.map((requier, indexreq)=>(
                            <div key={indexreq} className={style.point}>
                                <div className={style.coma}></div>
                                <div className={style.text}>{requier}</div>
                                <div className={style.trash}><i className="fa-solid fa-trash" onClick={()=>delParams('requierments', indexreq)}/></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.tab}>
                    <div className={style.titletab}>Условия</div>
                    <input className={style.name} value={conditions} onChange={(e)=>setConditions(e.target.value)}/>
                    <div className={style.btntab} onClick={()=>plusParams('conditions')}>Добавить</div>
                    <div className={style.points}>
                        {allconditions.map((cond, indexcond)=>(
                            <div key={indexcond} className={style.point}>
                                <div className={style.coma}></div>
                                <div className={style.text}>{cond}</div>
                                <div className={style.trash}><i className="fa-solid fa-trash" onClick={()=>delParams('conditions', indexcond)}/></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.tab}>
                    <div className={style.titletab}>Ключевые навыки</div>
                    <input className={style.name} value={keyskills} onChange={(e)=>setKeyskills(e.target.value)}/>
                    <div className={style.btntab} onClick={()=>plusParams('keyskills')}>Добавить</div>
                    <div className={style.points}>
                        {allkeyskills.map((skill, indexskill)=>(
                            <div key={indexskill} className={style.point}>
                                <div className={style.coma}></div>
                                <div className={style.text}>{skill}</div>
                                <div className={style.trash}><i className="fa-solid fa-trash" onClick={()=>delParams('keyskills', indexskill)}/></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.btns}>
                <div className={style.emailtitle}>Email для откликов: </div>
                <input className={style.email} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Введите email'/>
                <div className={style.btn} onClick={createVak}>Создать</div>
            </div>
        </div>
    )
}

export default CreateVak