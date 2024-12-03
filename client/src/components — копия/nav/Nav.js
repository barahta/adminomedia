import style from './NavStyle.module.scss'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Navigation (){
    const [user, setUser] = useState('');
    const [login, setLogin] = useState('');
    const [admin, setAdmin] = useState(false);
    const [avatar, setAvatar] = useState('');

    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        const storedLogin = localStorage.getItem('login');
        const storedAdmin = localStorage.getItem('admin');
        const storedAvatar = localStorage.getItem('avatar');
        if (storedUser) {
            setUser(storedUser);
            setLogin(storedLogin);
            setAdmin(storedAdmin);
            setAvatar(storedAvatar);
        }
    },[])

    return (
        <div className={style.main}>
            <Link to='/' className={style.point}>
                <i className="fa-solid fa-house"/>
                <div className={style.name}>Главная</div>
                <div className={style.active}></div>
            </Link>
            <Link to='/news' className={style.point}>
                <i className="fa-solid fa-newspaper"/>
                <div className={style.name}>Новости</div>
                <div className={style.active}></div>
            </Link>
            <Link to='/group' className={style.point}>
                <i className="fa-solid fa-layer-group"/>
                <div className={style.name}>Группа компаний</div>
                <div className={style.active}></div>
            </Link>
            {(login === 'barahtasurgut' || admin === true)&&(
                <Link to='/reg' className={style.point}>
                <i className="fa-solid fa-person-circle-plus"/>
                <div className={style.name}>Пользователи</div>
                <div className={style.active}></div>
                </Link>
                )
            }

        </div>
    )
}

export default Navigation