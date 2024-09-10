import style from './NewsPostStyle.module.scss'
function NewsPost ({post}) {


    return (
        <div className={style.main}>
            <div className={style.images} style={(post.url.length > 0)?{backgroundImage: `url('/files/news/${post.url}')`}:{backgroundImage: `url('/files/news/nophoto.svg')`}}></div>
            <div className={style.desc}>
                <div className={style.title}>{post.name}</div>
                <div className={style.description}>{post.desc}</div>
                <div className={style.content}>
                    {(post.content.join(' ').length > 80)?post.content.join(' ').slice(0,950):post.content}
                </div>
            </div>
            <div className={style.settings}>
                <i className="fa-solid fa-pen-to-square"/>
            </div>
        </div>
    )
}

export default NewsPost