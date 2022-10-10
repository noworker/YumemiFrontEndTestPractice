import axios from "axios"
import useSWR from "swr";


const useFetch = <T>(url: string) => {
    const fetcher = async (url: string): Promise<T> => {
        return axios
            .get(url, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_RESAS_KEY
                }
            })
            .then(res => res.data)
    } 
    const {data, error} = useSWR<T>(url, fetcher);
    return {
        data,
        error
    }
}
