import axios from "axios"
import useSWR from "swr";

// export const useFetch = (url: string) => {
//     const endPoint = 'https://opendata.resas-portal.go.jp' + url 
//     const fetcher = (url: string)=> {
//         return axios
//             .get(url, {
//                 headers: {
//                     'X-API-KEY': process.env.REACT_APP_RESAS_KEY
//                 }
//             })
//             .then(res => res.data)
//             .catch(e => e.message)
//     } 
//     const {data, error} = useSWR(url, fetcher);
//     return [data, error];
// }

export type ReturnedData<TResponse> =  {
    data: TResponse | undefined
    error: any
}
export const useFetch = <T>(path : string): ReturnedData<T> => {
    const url = 'https://opendata.resas-portal.go.jp' + path
    const fetcher = (url:string) => {
        return axios
            .get('hogehoge',{
                headers: {
                    'X-API-KEY': process.env.REACE_APP_RESAS_KEY
                }
            })
            .then(res => res.data)
    }
    const {data, error} = useSWR<T>(url, fetcher);
    return {data, error}

}
