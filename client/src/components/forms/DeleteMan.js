import style from './PlusAUPStyle.module.scss'
import React, {useRef, useState} from "react";
import NewsService from "../../services/NewsService";
import {useMessage} from "../../hooks/message.hook";

function PlusAUP ({man, setActivemodal}) {
    const message = useMessage();
    const fileInputRef = useRef(null);
    const [imgpage, setImgpage] = useState('');

    const [firstname, setFirstname] = useState('')
    const [secondname, setSecondname] = useState('')
    const [lastname, setLastName] = useState('')
    const [developer, setDeveloper] = useState('')
    const [email, setEmail] = useState('')

    const createMan = async()=>{
        try{
            const {data} = await NewsService.plusAUP({firstname,secondname,lastname,developer,email,image:imgpage})
            if(data){
                setImgpage('')
                setFirstname('')
                setSecondname('')
                setLastName('')
                setDeveloper('')
                setEmail('')
                setActivemodal(false)
                message(`${data.developers} ${data.firstname} ${data.lastname} был успешно добавлен`)
            }

        }catch(e){
            console.log(e)
            message(`Что-то пошло не так, попробуйте еще раз`)
        }
    }

    const handleFileUpload = (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        fetch(`${process.env.REACT_APP_API_BASE_URL}/api/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setImgpage(data.filePath);
            })
            .catch(error => console.error('Error uploading image:', error));
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return(
        <div className={style.main}>
            <div className={style.title}>Добавление нового сотрудника</div>
            <div className={style.form}>
                <div className={style.photo}

                     onClick={handleClick}
                     style={(imgpage.length>0)?{backgroundImage: `url('${imgpage}')`}:{backgroundImage: `url('files/mans/${man.photo}')`}}>
                    <div className={style.active}><i className="fa-solid fa-plus"/></div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                        accept="image/*"
                    />
                </div>
                <div className={style.data}>
                    <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className={style.inputs} placeholder='Имя'/>
                    <input type="text" value={secondname} onChange={(e)=>setSecondname(e.target.value)} className={style.inputs} placeholder='Отчество'/>
                    <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} className={style.inputs} placeholder='Фамилия'/>
                    <input type="text" value={developer} onChange={(e)=>setDeveloper(e.target.value)} className={style.inputs} placeholder='Должность'/>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className={style.inputs} placeholder='Эл. почта'/>
                    <div className={style.btn} onClick={createMan}>Добавить</div>
                </div>
            </div>
        </div>
    )
}

export default PlusAUP