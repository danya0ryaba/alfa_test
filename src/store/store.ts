import { create } from 'zustand'
import { User } from '../types/types'

interface UsersState {
    users: User[]
    loading: boolean
    error: string | null
    fetchUsers: () => void
    addUser: (user: User) => void
    like: (id: string) => void
    addFavorite: (id: string) => void
    deleteUser: (id: string) => void
}

export const useUsersStore = create<UsersState>()((set) => ({ // наверное придется подключить immer 
    users: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
        set({ loading: true });
        try {
            const response = await fetch('https://reqres.in/api/users?page=1');
            if (!response.ok) throw response;
            const data = await response.json();
            const usersWithLike = data.data.map((user: User) => ({ ...user, id: user.id.toString(), isLike: false, isFavorite: false }));
            set({ users: usersWithLike })
        } catch (e: any) {
            console.log(e)
            let message = e.message;
            if (e.statusCode === 400) message = await e.json();
            set({ error: message });
        } finally {
            set({ loading: false })
        }
    },
    // на api нет возможности отправлять изображение, поэтому сделал локально
    // ну и в задании так было написано
    addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
    like: (id: string) => {
        set((state) => ({
            users: state.users.map((user) => user.id === id ? { ...user, isLike: !user.isLike } : user),
        }))
    },
    addFavorite: (id: string) => {
        set((state) => ({
            users: state.users.map((user) => user.id === id ? { ...user, isFavorite: !user.isFavorite } : user),
        }))
    },
    deleteUser: (id: string) => {
        set((state) => ({
            users: state.users.filter((user) => user.id !== id)
        }))
    },
}))

interface FilterState {
    filter: string
    setFilter: (filter: string) => void
}

export const useFilterState = create<FilterState>((set) => ({
    filter: 'all',
    setFilter: (filter: string) => set({ filter })
}))

export const selectUsers = (state: UsersState) => state;