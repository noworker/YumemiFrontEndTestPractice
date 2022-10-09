import {Outlet} from 'react-router-dom'

const MainLayout: React.FC = () => {
    return (
        <>
            <header>main Layout</header>
            <Outlet />
        </>
    )
}

 export default MainLayout;