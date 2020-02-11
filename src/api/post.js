import axios from 'axios'

export function postApi(url, row) {
    console.log("post called?")

    return axios
        .post(url, row)
        .then(function (response) {
            console.log(response);
            const myData = response["data"];
            // console.log("hehe" + JSON.stringify(myData[0]));
            var arr = [];
            for (var i = 0; i < myData.length; i++) {
                arr.push(myData[i]);
            }
            return arr;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

export function postApiQ4(url, row) {
    console.log("post called?")

    return axios
        .post(url, row)
        .then(function (response) {
            console.log(response);
            const myData = response["data"]["recipients"];
            // console.log("hehe" + JSON.stringify(myData[0]));
            var arr = [];
            for (var i = 0; i < myData.length; i++) {
                arr.push(myData[i]);
            }
            return arr;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}