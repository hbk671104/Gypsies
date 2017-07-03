import gypStore from 'store'
import queryString from 'query-string'

const fetchWrap = async (request, params = {}) => {
    const access_token = gypStore.getState().auth.access_token
    const queryParam = {...params, access_token}
    let requestURL = request.url
    let requestInit = { method : 'GET' }
    switch (request.method) {
        case 'GET':
            requestURL = `${requestURL}?${queryString.stringify(queryParam)}`
            break
        case 'POST':
            requestInit = { method: 'POST', body: JSON.stringify(queryParam) }
            break
        default:
            break
    }
    try {
        const res = await fetch(requestURL, requestInit)
        return await res.json()
    } catch (e) {
        return e
    }
}

export default fetchWrap
