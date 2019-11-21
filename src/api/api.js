import axios from 'axios';

let api = 'https://www.mockable.io/a/#/space/demo2797543/rest/VZppe8AAA';

export default {
    fetchEvents() {
        return axios.get(api + '/events')
        .then(res => {
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
}