import axios from 'axios';

// let api = 'https://www.mockable.io/a/#/space/demo2797543/rest/VZppe8AAA/results';
let api = 'https://randomuser.me/api/';

export default {
    fetchEvents() {
        return axios.get(api)
        .then(res => {
            return res.data.results
        }).catch(err => {
            console.log(err)
        })
    }
}