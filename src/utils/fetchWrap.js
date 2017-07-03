import gypStore from 'store'
import { toJS } from 'immutable'

const request = (url, params = {}) => {
    const access_token = gypStore.getState().get('auth').get('access_token').toJS()
    console.log(access_token);
    if (url.method === 'GET') {

    }
}

export default request
