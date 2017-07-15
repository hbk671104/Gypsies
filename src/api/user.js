import { API_DOMAIN } from 'react-native-dotenv'

export const info = id => {
    return {
        method : 'GET',
        url : `${API_DOMAIN}/v1/users/${id}/`
    }
}

export const recent = id => {
    return {
        method : 'GET',
        url : `${API_DOMAIN}/v1/users/${id}/media/recent/`
    }
}

export const liked = () => {
    return {
        method : 'GET',
        url : `${API_DOMAIN}/v1/users/self/media/liked/`
    }
}
