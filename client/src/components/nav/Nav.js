import style from './NavStyle.module.scss'

function Navigation (){
    return (
        <div className={style.main}>
            <div className={style.point}>
                <i className="fa-solid fa-house"/>
                <div className={style.name}>Главная</div>
                <div className={style.active}></div>
            </div>
            <div className={style.point}>
                <i className="fa-solid fa-newspaper"/>
                <div className={style.name}>Новости</div>
                <div className={style.active}></div>
            </div>
        </div>
    )
}

export default Navigation