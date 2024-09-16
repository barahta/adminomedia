import style from './NewsPostStyle.module.scss'
function NewsPost ({post,setThisPost,setOpenPost}) {


    return (
        <div className={style.main}>
            <div className={style.images} style={(post.image.length > 0)?{backgroundImage: `url('${post.image}')`}:{backgroundImage: `url('/files/news/nophoto.svg')`}}></div>
            <div className={style.desc}>
                <div className={style.title}>{post.title}</div>
                <div className={style.description}>{post.desc}</div>
                <div className={style.content}>
                    {(post.text && post.text.join(' ').length > 80)?post.text.join(' ').slice(0,950):post.text}
                </div>
            </div>
            <div className={style.settings}>
                <i className="fa-solid fa-pen-to-square" onClick={()=>{setThisPost(post);setOpenPost(true)}}/>
            </div>
        </div>
    )
}

export default NewsPost