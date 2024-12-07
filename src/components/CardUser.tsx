import React from 'react'
import { User } from '../types/types';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Trash2 } from 'lucide-react';
// import { selectUsers, useUsersStore } from '../store/store';

interface CardUserProps extends User {
    like: (id: string) => void
    deleteUser: (id: string) => void
    addFavorite: (id: string) => void
}

export const CardUser: React.FC<CardUserProps> = ({ id, email, first_name, last_name, avatar, isLike, like, deleteUser, isFavorite, addFavorite }) => {

    const color = isLike ? 'red' : 'black';
    const colorFavorite = isFavorite ? 'yellow' : 'black';

    const onHandlerLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
        e.preventDefault();
        like(id);
    }

    const removeUser = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
        e.preventDefault();
        deleteUser(id);
    }

    const onHandlerFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
        e.preventDefault();
        addFavorite(id);
    }

    return <Link to={`/products/${id}`}>
        <li className='user'>
            <div className="user_image">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="user_content">
                <h4 className="name">{first_name}</h4>
                <h5 className="family">{last_name}</h5>
                <span className="email">{email}</span>
                <div className="buttons">
                    <Heart
                        onClick={(e) => onHandlerLike(e, id)}
                        color={color}
                        strokeWidth={2}
                        size={20}
                    />
                    <Star
                        onClick={(e) => onHandlerFavorite(e, id)}
                        color={colorFavorite}
                        strokeWidth={4}
                        size={20}
                    />
                    <Trash2 onClick={(e) => removeUser(e, id)}
                        strokeWidth={2}
                        size={20}
                    />
                </div>
            </div>
        </li>
    </Link>
}