import { Global, css } from "@emotion/react"

const GlobalCss: React.FC = () => {
    const reset = css`
    html {
        font-size: 15px;
    },
    * {
        margin: 0;
        padding: 0;
    },
    li {
        list-style: none;
    } 
    `
    return (
        <Global styles={reset} />
    )
}

export default GlobalCss;