import React from 'react'
import { useFilterState } from '../store/store';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Filter: React.FC = () => {

    const { setFilter, filter } = useFilterState(state => state);

    return <>
        <Link to={'/create-product'}>
            <Button>add user</Button>
        </Link>
        <ul className='filter'>
            <li onClick={() => setFilter('all')}>
                <button disabled={filter === 'all'}>
                    All
                </button>
            </li>
            <li onClick={() => setFilter('like')}>
                <button disabled={filter === 'like'}>
                    Like
                </button>
            </li>
            <li onClick={() => setFilter('favorites')}>
                <button disabled={filter === 'favorites'}>
                    Избранное
                </button>
            </li>
        </ul>
    </>

}
