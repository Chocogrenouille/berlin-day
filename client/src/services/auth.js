import axios from 'axios';

const signup = (username, password, email) => {
    return axios.post("/auth/signup", {username, password, email})
    .then(response => response.data)
    .catch(error => error)
}

export { signup };