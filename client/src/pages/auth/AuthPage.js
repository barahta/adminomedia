import {useState,useContext,useEffect} from "react";
import {Context} from "../../index";
import {useMessage} from "../../hooks/message.hook";
import AuthService from "../../services/AuthService";
import style from './Auth.module.scss'
export default function AuthPage(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [empty,setEmpty] = useState(false)

    const {store} = useContext(Context)
    const message = useMessage()

    // const firstReg = async () => {
    //     try{
    //         const {data} = await AuthService.registration({login: 'barahtasurgut',password: 'Barah396525',tn: '410099',name: 'Куб Владимир Тенович',email: 'barahtasurgut@gmail.com'})
    //         console.log('Регистрация успешна')
    //     }catch{
    //         console.log('не зарегистрировал')
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const promise = await store.login(login.toLowerCase(),password)

        if(promise?.response?.data?.message){
            setEmpty(true)
            message(promise.response.data.message)
        }else{
            setEmpty(false)
        }
    }
    useEffect(() => {
        // firstReg()
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault()
                handleSubmit(event)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleSubmit])

    return (
        <div className={style.main}>
            <div className={style.center}>
                <div className={style.auth}>
                    <div className={style.logo}><img src="./files/logos/omedia.svg" alt=""/></div>
                    <input className={style.into} value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Логин"/>
                    <input className={style.into} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль"/>
                    <div onClick={(e) => handleSubmit(e)} className={style.btn}>ВОЙТИ</div>
                </div>
            </div>
        </div>
    )
}
