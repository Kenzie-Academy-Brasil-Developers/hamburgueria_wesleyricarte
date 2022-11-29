import axios from "axios"

const api = axios.create({
    base_URL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
    timeout: 20000,
})

export default api;