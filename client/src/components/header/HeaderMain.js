import style from './HeaderMain.module.scss'
import Nav from "../navigate/Nav";

function HeaderMain () {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.back}>

                    <div className={style.upper}>
                        <div className={style.logo}>
                            <img src="/files/header/logo.webp" alt=""/>
                        </div>
                        <div className={style.nav}>
                            <Nav />
                        </div>
                    </div>
                    <div className={style.text}>
                        <p>Создаём</p>
                        <p>медиа</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain