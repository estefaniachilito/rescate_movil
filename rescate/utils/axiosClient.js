import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const axiosClient = axios.create({
    baseURL: 'http://192.168.100.58:3333'
})

axiosClient.interceptors.request.use( async (req) => {
    const token = await AsyncStorage.getItem('token')
    req.headers['token'] = token
    return req
})

axiosClient.interceptors.response.use((res) => {
    return res
}, (error) => {
    console.log(error.response.data)
    if (error.response.status == 401) {
        console.log('Sesión caducada');
    }
})


export default axiosClient