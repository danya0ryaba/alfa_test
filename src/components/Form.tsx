import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import { selectUsers, useUsersStore } from '../store/store'
import { useNavigate } from 'react-router-dom'


export const Form: React.FC = () => {

    const { addUser } = useUsersStore(selectUsers);
    const backMainPage = useNavigate();
    const id = React.useId();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({ mode: 'onSubmit' });

    const onSubmit = (data: any) => {
        try {
            const user = {
                id,
                email: data.email,
                first_name: data.name,
                last_name: data.family,
                avatar: `https://placehold.jp/260x180.png`,
                isLike: false,
                isFavorite: false
            };
            addUser(user);
            reset();
            backMainPage('/');
        } catch (error) {
            console.error('Ошибка при добавлении пользователя:', error);
        }
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>

            <h3>Form</h3>

            <div className='wrapper_input'>
                <label htmlFor="name">
                    name
                    <input id='name'
                        {...register('name',
                            {
                                required: 'Поле не может быть пустым',
                                minLength: {
                                    value: 5,
                                    message: 'Минимум 5 символов'
                                }
                            }
                        )}
                        type="text"
                    />
                </label>
                <div>
                    {errors?.name && <p style={{ color: 'red' }}>{errors.name?.message as String || "Error!"}</p>}
                </div>
            </div>

            <div className='wrapper_input'>
                <label htmlFor="family">
                    family
                    <input id='family'
                        {...register('family',
                            {
                                required: 'Поле не может быть пустым',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символов'
                                }
                            }
                        )}
                        type="text"
                    />
                </label>
                <div>
                    {errors?.family && <p style={{ color: 'red' }}>{errors.family?.message as String || "Error!"}</p>}
                </div>
            </div>

            <div className='wrapper_input'>
                <label htmlFor="email">
                    email
                    <input id='email'
                        {...register('email',
                            {
                                required: 'Поле не может быть пустым',
                                minLength: {
                                    value: 6,
                                    message: 'Минимум 6 символов'
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Введите корректный email'
                                }
                            }
                        )}
                        type="email"
                    />
                </label>
                <div>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email?.message as String}</p>}
                </div>
            </div>

            <Button type={'submit'} disabled={!isValid}>submit</Button>

        </form>
    </>
    )
}
