export interface User {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
    isLike?: boolean
    isFavorite?: boolean
}

export interface UserInfo {
    data?: User,
    support?: {
        text: string
        url: string
    }
}