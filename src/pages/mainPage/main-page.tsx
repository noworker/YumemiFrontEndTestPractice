import { useMainPageLogic } from "./main-page.hook";
import MainPageView from "./main-page.view";


const MainPage: React.FC = () => {
    // react-testing-library jest fetch axios
    const viewProps = useMainPageLogic()
    return <><MainPageView {...viewProps} /></>
}

export default MainPage;