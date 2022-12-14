import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme}) => theme.fonts.title};
    }
    html{
        scroll-behavior: smooth;
    }

    :root {
    --swiper-theme-color: ${({theme}) => theme.colors.primary};
}
`

export const theme = {
    colors:{
        write: '#242424',
        primary: '#FEB931',
        background: '#DDDDDD',
    },
    fonts:{
        title: "'Alexandria', sans-serif;",
    }

}
