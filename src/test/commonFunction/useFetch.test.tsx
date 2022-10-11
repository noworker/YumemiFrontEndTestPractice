import {useFetch} from '../../../src/commonFunction/useFetch'
import {renderHook, RenderHookResult} from '@testing-library/react'
import useSWR from 'swr'
import {ReturnedData} from '../../../src/commonFunction/useFetch'

jest.mock('swr');
// @ts-ignore
useSWR.mockReturnValue((
    {
        data: {mock: "data1111"}
    }
))

describe('useFetch',() => {
    type Data = {
        message: null
        result: {
            prefCode: string
            prefName: string
        }[]
    }
    let result: RenderHookResult<ReturnedData<Data>, any> 
    const mock:Data = {
        message: null,
        result: [
            {
                prefCode: '0001',
                prefName: '北海道'
            }
        ] 
    }
    
    test('test', async() => {
        result = await renderHook(() => useFetch<Data>('/api/v1/prefectures'))
        console.log(result.result.current)
    })
})