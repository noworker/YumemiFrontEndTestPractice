import {useRecoilValue} from 'recoil'
import { AuthStateSelector } from '../../recoil/AuthState/auth-state-selector'

type Props = {
    children : React.ReactNode
}

const AuthGuard = ({children}: Props) => {
    const authState = useRecoilValue(AuthStateSelector)
    if(authState.hasAuth) {
        return <>{children}</>
    } else {
        return <><h1>no auth</h1></>
    }
}

export default AuthGuard;