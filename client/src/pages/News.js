import style from './styles/Main.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import Companies from "../components/companies/Companies";
import Navigation from "../components/nav/Nav";

function Main () {


    return (
        <div className={style.bodymain}>
            <HeaderMain page={'.'}/>
            <div className={style.main}>
                <div className={style.leftpath}>
                    <Navigation />
                </div>
                <div className={style.centerpath}>
                    <Companies />
                </div>
                <div className={style.rightpath}></div>
            </div>


        </div>
    )
}

export default Main