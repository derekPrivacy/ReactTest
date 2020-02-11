import axios from 'axios'

export function deleteApi(url, para) {
    console.log("delete called?")

    return axios
        .post(url, para)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}