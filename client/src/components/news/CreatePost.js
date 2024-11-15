import React, {useRef,useEffect, useState} from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import style from './CreatePostStyle.module.scss';
import NewsService from "../../services/NewsService";
import {useMessage} from "../../hooks/message.hook";

const ITEM_TYPE = 'STROCK';

function DraggableStrock({ strock, index, moveStrock, deleteStrock }) {
    const [, ref] = useDrag({
        type: ITEM_TYPE,
        item: { index }
    });

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item) {
            if (item.index !== index) {
                moveStrock(item.index, index);
                item.index = index; // Update index after swapping
            }
        }
    });

    return (
        <div ref={(node) => ref(drop(node))} className={style.strock}>
            <p>
                {strock}
                <div className={style.grab}>
                    <i className="fa-regular fa-hand-back-fist" />
                </div>
            </p>
            <div className={style.delete}>
                <i className="fa-solid fa-trash" onClick={()=>deleteStrock(index)}></i>
            </div>
        </div>
    );
}

function CreatePost({setActivemodal}) {
    const coms = [
        {
            name: 'OMEDIA!',
            active: false
        },
        {
            name: 'HOPE KIDS',
            active: false
        },
        {
            name: 'REA FARM',
            active: false
        },
        {
            name: 'HOPE FITNESS',
            active: false
        },
        {
            name: 'ВЕРНЫЙ ДРУГ',
            active: false
        },
        {
            name: 'АВИАТЕХ',
            active: false
        }
    ]
    const message = useMessage();
    const [publiccom, setPubliccom] = useState(coms)

    const [viewcom, setViewcom] = useState()

    const onoffActive = (index) => {
        const newarr = [...viewcom]
        newarr[index].active = !newarr[index].active
        setViewcom(newarr)
    }

    const post = []

    const [view, setView] = useState(post);
    const [namepost, setNamepost] = useState('');
    const [descpost, setDescpost] = useState('');
    const [textpost, setTextpost] = useState('');
    const [urlpost, setUrlpost] = useState('');
    const fileInputRef = useRef(null);
    const [imgpage, setImgpage] = useState('');

    const moveStrock = (fromIndex, toIndex) => {
        const updatedContent = [...view];
        const [movedItem] = updatedContent.splice(fromIndex, 1); // Удалить элемент из старой позиции
        updatedContent.splice(toIndex, 0, movedItem); // Вставить его в новую позицию

        setView(updatedContent); // Сохраняем обновленный массив
    };

    const updateText = () => {
        const newview = [...view]
        if(textpost.length > 0){
            newview.push(textpost)
            setView(newview)
            setTextpost('')
        }
    }

    const deleteStrock = (index) => {
        const newView = [...view];  // Создаём копию массива
        newView.splice(index, 1);   // Удаляем элемент по индексу
        setView(newView);
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

    const createPost = async () => {
        try{
            if(view.length>0 && namepost.length>0 && descpost.length>0){
                const {data} = await NewsService.createPost({text: view, name: namepost, desc: descpost, image: imgpage, public: viewcom})
                if(data){
                    setView([])
                    setNamepost('')
                    setDescpost('')
                    setTextpost('')
                    setImgpage('')
                    setActivemodal(false)
                }else{
                    message('Новость не создалась, попробуйте еще раз')
                }
            }else{
                message('Есть незаполненные поля')
            }

        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        setViewcom(coms)
    }, [])
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.main}>
                <div className={style.left}>
                    <div
                        className={style.photo}
                        onClick={handleClick}
                        style={(imgpage.length>0)?{backgroundImage: `url('${imgpage}')`}:{backgroundImage: `url('/files/news/nophoto.svg')`}}>
                        <div className={style.active}><i className="fa-solid fa-plus"/></div>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                        accept="image/*"
                    />
                    <div className={style.nameblock}>Заголовок новости</div>
                    <input className={style.title} value={namepost} onChange={(e)=>setNamepost(e.target.value)}/>
                    <div className={style.nameblock}>Краткое описание новости</div>
                    <textarea className={style.desc} value={descpost} onChange={(e)=>setDescpost(e.target.value)}></textarea>
                </div>

                <div className={style.center}>
                    <div className={style.nameblock}>Содержание новости</div>
                    <textarea className={style.desc}  onChange={(e)=>setTextpost(e.target.value)} value={textpost}></textarea>
                    <div className={style.btnplus} onClick={updateText}>Добавить </div>
                    <div className={style.listp}>
                        {view.map((strock, index) => (
                            <DraggableStrock
                                key={index}
                                index={index}
                                strock={strock}
                                moveStrock={moveStrock}
                                deleteStrock={deleteStrock}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.up}>
                        <div className={style.title}>Где опубликовано:</div>
                        <div className={style.listcom}>
                            {(viewcom)&&viewcom.map((com, indexcom)=>(
                                <div className={style.com} key={indexcom}>
                                    <div className={style.name} style={(com.active)? {color: '#410099'}:{}}>{com.name}</div>
                                    <div className={(com.active)?style.btnon:style.btnoff} onClick={()=>onoffActive(indexcom)}>
                                        <div className={style.sphere}></div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.saving} onClick={createPost}>
                            <i className="fa-regular fa-floppy-disk"/>
                            <div className={style.text}>Сохранить</div>
                        </div>
                    </div>

                </div>
            </div>
        </DndProvider>
    );
}

export default CreatePost;