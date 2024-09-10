import style from './NavStyle.module.scss'
import {Link} from "react-router-dom";

function Navigation (){
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
        </div>
    )
}

export default Navigation