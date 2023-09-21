import axios from 'axios'
import { useState } from "react";
import { useSelector } from "react-redux";
import { Platform } from 'react-native';

function useApi() {
    const baseUrl = Platform.OS === 'ios' ? process.env.EXPO_PUBLIC_API_URL : process.env.EXPO_PUBLIC_API_URL;
    let token = ''
    token = token != '' ? token : ''
    const [request, setrequest] = useState({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    })
    return axios.create(request)
}

export default useApi