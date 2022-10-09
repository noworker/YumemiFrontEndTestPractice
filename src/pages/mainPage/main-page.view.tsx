type ViewProps = {
    title: string
}
const MainPageView = ({title}: ViewProps) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

export default MainPageView;