import style from './HeaderMain.module.scss'

function HeaderMain ({page}) {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                <img src="/files/header/logomain3.svg" alt=""/>

            </div>
            <div className={style.pages}>{page}/</div>
            <div className={style.lk}>
                <i className="fa-solid fa-user"/>
                <div className={style.name}>Барахтянский Владимир Алексеевич</div>
            </div>
        </div>
    )
}

export default HeaderMain