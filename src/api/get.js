import axios from 'axios'


export function getApi(url) {
    // console.log("get called?")

    return axios
        .get(url)
        .then(res => {
            console.log("return data " + JSON.stringify(res))
            const myData = res["data"]["students"];
            var arr = [];
            for (var i = 0; myData.length != 0 && i < myData.length; i++) {
                arr.push(myData[i]);
            }
            return arr;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}



