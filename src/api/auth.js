import queryString from 'query-string'
import { API_DOMAIN, CLIENT_ID, REDIRECT_URL } from 'react-native-dotenv'

export const oAuth = `${API_DOMAIN}/oauth/authorize/?${
    queryString.stringify({
        client_id : CLIENT_ID,
        redirect_uri : REDIRECT_URL,
        response_type : 'token'
    })
}`
