
type authHeader = {
    'Content-type': string;
    'Authorization': string;
}

export function getRequestHeader() {

    const token = localStorage.getItem("accessToken")

    const authHeader = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    return authHeader;
}


