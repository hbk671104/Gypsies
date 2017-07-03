export const recent = id => {
    return {
        method : 'GET',
        url : `https://api.instagram.com/v1/users/${id}/media/recent/`
    }
}

export const liked = () => {
    return {
        method : 'GET',
        url : 'https://api.instagram.com/v1/users/self/media/liked/'
    }
}
