import axios from 'axios'
const instance = axios.create({
 baseURL: "https://csc3916-messaging-app.herokuapp.com/"
})
export default instance