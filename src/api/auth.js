import queryString from 'query-string'
import { clientId, redirectUrl } from 'utils/const'

export const oAuth = `https://api.instagram.com/oauth/authorize/?${
    queryString.stringify({
        client_id : clientId,
        redirect_uri : redirectUrl,
        response_type : 'token'
    })
}`
