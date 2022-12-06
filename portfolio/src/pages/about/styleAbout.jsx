import styled from "styled-components";

export const AboutS = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    .margin{
        width: 80%;
        margin: 0 auto;
    }
    .allSection{
        width: 80%;
        margin-left: 15%;
        
        .title{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: -60px;
        }
        .NameTitle{
            font-size: 64px;
            margin-top: 20px;
            padding: 30px 150px;
            border: 2px dotted black;
            font-weight: 800;
        }
    }
    @media screen and (max-width: 900px){
        display: flex;
        align-items: center;
        justify-content: center;
        .margin{
            width: 100%;
            margin: 0 auto;

        }
        .allSection{
            width: 90%;
        margin: 0 auto;

        }
        .title{
            margin-bottom: 0 !important;

        }
        .NameTitle{
            font-size: 35px !important;
            padding: 30px 50px !important;

        }

    }
`