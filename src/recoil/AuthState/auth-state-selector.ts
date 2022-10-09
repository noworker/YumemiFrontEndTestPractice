import {selector} from 'recoil'
import { AuthStateType } from './auth-state-type'
import { AuthState } from './auth-state'
export const AuthStateSelector = selector<AuthStateType>({
    key: 'authStateSelector',
    get: ({get}) => {
        const authState: AuthStateType = get(AuthState)
        return AuthState;
    }
})