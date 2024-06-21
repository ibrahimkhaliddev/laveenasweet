
const verifyotpnow = (userphone, myotp, username) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders
    };

    fetch("https://dev.honda.zaviago.com/api/method/honda_api.api_calls.verifyuser.verifyotp?userphone=" + userphone + "&otp=" + myotp + "&username=" + username, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log('fffff');
        })
        .catch(error => console.log('error', error));

}
export { verifyotpnow };




const phonverifynow = (phone) => {
    try {
        return fetch("https://dev.honda.zaviago.com/api/method/honda_api.api_calls.verifyuser.getphone?userphone=" + phone, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => response.json()).then((data) => {
            return data;
        })

    } catch (error) {
        return error;
    }
}

export { phonverifynow };
