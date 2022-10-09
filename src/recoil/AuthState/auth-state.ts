import {atom} from 'recoil'
import { AuthStateType } from './auth-state-type'

export const AuthState = atom<AuthStateType>({
    key: "authState", 
    default: {
        jwt: '',
        hasAuth: true 
    }
})

