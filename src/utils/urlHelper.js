import queryString from 'query-string'

export const getUrlParams = url => {
    if (url) {
        const rawParam = url.split('#')[1]
        if (rawParam) {
            return queryString.parse(rawParam)
        }
    }
    return
}
