import style from './Companies.module.scss'

function Companies (){
    return (
        <div className={style.main}>
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

        </div>
    )
}

export default Companies