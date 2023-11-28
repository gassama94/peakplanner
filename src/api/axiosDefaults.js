import axios from "axios";

axios.defaults.baseURL = 'https://drfapip5-5a529a133c37.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] =  "form-data";
axios.defaults.withCredentials = true 