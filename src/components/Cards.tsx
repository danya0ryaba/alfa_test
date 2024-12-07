import React from 'react'
import { selectUsers, useFilterState, useUsersStore } from '../store/store';
import { CardUser } from './CardUser';

export const Cards = () => {

    const filter = useFilterState(state => state.filter);
    const { users } = useUsersStore(selectUsers);
    const { like, deleteUser, addFavorite } = useUsersStore(state => state);

    const filteredUsers = React.useMemo(() => {
        switch (filter) {
            case 'like':
                return users.filter(user => user.isLike);
            case 'favorites':
                return users.filter(user => user.isFavorite);
            case 'all':
                return users;
            default:
                return users;
        }
    }, [filter, users]);

    return (
        <ul className='users'>
            {filteredUsers.map(user => <CardUser addFavorite={addFavorite} like={like} deleteUser={deleteUser} key={user.id} {...user} />)}
        </ul>
    )
}
