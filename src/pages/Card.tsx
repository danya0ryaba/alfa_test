import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserInfo } from '../types/types';
import { Button } from '../components/Button';

export const Card = () => {

    const [user, setUser] = React.useState<UserInfo>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const { id } = useParams();
    const back = useNavigate();

    // ТУТ КОНЕЧНО НУЖНО БЫЛО ВЫНЕСТИ ЗАПРОС И СОЗДАТЬ ОБЪЕКТ С ЗАПРОСАМИ, НО Я НЕ ВИЖУ СМЫСЛА

    // И ПРИ ПОПЫТКЕ ПЕРЕЙТИ НА СОЗДАННОГО ПОЛЬЗОВАТЕЛЯ БУДЕТ ДИЧЬ, ПОТОМУ ЧТО Я СОЗДАЮ ЕГО ЛОКАЛЬНО И ЕГО ID ЯВЯЛЯЕТСЯ НЕ ВАЛИДНЫМ
    React.useEffect(() => {
        const getUser = async (id: string) => {
            setLoading(true)
            try {
                const response = await fetch(`https://reqres.in/api/users/${id}`);
                if (!response.ok) throw response;
                const data = await response.json();
                setUser(data)
                setLoading(false)
            } catch (e: any) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        if (id) getUser(id)
    }, [])

    return <>
        {loading ? <h1>Loading...</h1> : (
            <><Button clickFunction={() => back(-1)}>back</Button>
                <div className="user_info">
                    <div className="user_info-image">
                        <img src={user.data?.avatar} alt="avatar" />
                    </div>
                    <div className="user_info_text">
                        <h2 className="user_info_text-title">{user.data?.first_name}</h2>
                        <h4 className="user_info_text-family">{user.data?.last_name}</h4>
                        <a className='user_info_text-email' href='email' target='_blank'>email: {user.data?.email}</a>
                        <p>{user.support?.text}</p>
                        <a className='user_info_text-url' href={user.support?.url} target='_blank'>link: {user.support?.url}</a>
                    </div>
                </div>
            </>
        )}
    </>
}