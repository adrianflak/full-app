import axios from "axios";

export default axios.create({
    withCredentials:true,
    baseURL:'https://backend-app-af.azurewebsites.net'
})
