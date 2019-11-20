import axios from 'axios';

let api = 'https://1f8581cf-55be-41f3-ad1d-65728e49de28.mock.pstmn.io';

export default {
    fetchProducts() {
        return axios.get(api + '/products')
            .then(res => {
                return res.data
            }).catch(err => {
                console.log(err)
            })
    }
}