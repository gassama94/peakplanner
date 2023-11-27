import axios from "axios";

axios.defaults.baseURL = 'https://peakplanning-9a67e4688756.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'Authorization'
axios.defaults.withCredentials = true 