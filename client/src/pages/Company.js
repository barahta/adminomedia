import style from './styles/News.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import Navigation from "../components/nav/Nav";
import {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';

function Menu ({company}) {

    const [menu, setMenu] = useState({})

    const coms = [
        {
            com: 'omedia',
            menu: [
                {
                    point: 'Промо ролик',
                    link: 'promo',
                },
                {
                    point: 'АУП',
                    link: 'aup',
                },
                {
                    point: 'Площадки',
                    link: 'activities',
                },
                {
                    point: 'О нас',
                    link: 'about',
                },
                {
                    point: 'Все проекты',
                    link: 'group',
                },
                {
                    point: 'Ваканскии',
                    link: 'vakansii',
                }
            ]
        },
        {
            com: 'hopekids',
            menu: [
                {
                    point: 'Промо ролик',
                    link: 'promo',
                },
                {
                    point: 'Пакеты',
                    link: 'packs',
                },
                {
                    point: 'Галерея',
                    link: 'projects',
                },
                {
                    point: 'Контакты',
                    link: 'contacts',
                },
                {
                    point: 'О нас',
                    link: 'about',
                }
            ]
        },
        {
            com: 'reafarm',
            menu: [
                {
                    point: 'Промо ролик',
                    link: 'promo',
                },
                {
                    point: 'Товары',
                    link: 'packs',
                },
                {
                    point: 'Контакты',
                    link: 'contacts',
                },
                {
                    point: 'О нас',
                    link: 'about',
                }
            ]
        }
    ]
    useEffect(() => {
        const foundMenu = coms.find(item => item.com === company);
        if (foundMenu) {
            setMenu(foundMenu);
        } else {
            setMenu({});
        }
    }, [company]);
    return (
        <div className={style.menu}>
            {(menu.menu)&&menu.menu.map((point, index)=>(
                <Link to={`/${point.link}?com=${company}`} key={index} className={style.point}>{point.point}</Link>
            ))}

        </div>
    )
}

function Company () {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const company = params.get('com');

    const [data, setData] = useState('')
    const [activemodal, setActivemodal] = useState(false)
    const [news, setNews] = useState([])
    const [openPost, setOpenPost] = useState(false)
    const [thisPost, setThisPost] = useState({})


    useEffect(()=>{

    },[])
    return (
        <div className={style.bodymain}>
            <HeaderMain page={`./${company}`}/>
            <div className={style.main}>
                <div className={style.leftpath}>
                    <Navigation />
                </div>
                <div className={style.centerpath}>
                    {(company)&&(
                        <Menu company={company}/>
                    )}
                </div>
                {/*<div className={style.rightpath}></div>*/}
            </div>


        </div>
    )
}

export default Company