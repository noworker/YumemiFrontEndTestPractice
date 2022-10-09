import { BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "../Layouts/main-layout"
import MainPage from "../pages/mainPage/main-page"
import AuthGuard from "./auth/auth-guard"

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<MainLayout />}>
                    <Route index element={<AuthGuard children={<MainPage />} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;