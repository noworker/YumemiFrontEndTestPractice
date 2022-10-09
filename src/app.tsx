import './app.scss'
import GlobalCss from './commonStyle/global-css'
import Router from './router/router';
import {RecoilRoot} from 'recoil'

const App:  React.FC = () => {
    return (
        <>
            <GlobalCss />
            <RecoilRoot>
                <Router />
            </RecoilRoot>
        </>
    )
}

export default App;