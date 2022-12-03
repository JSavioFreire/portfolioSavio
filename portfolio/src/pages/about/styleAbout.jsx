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
            margin-bottom: -40px;
        }
        .NameTitle{
            font-size: 64px;
            margin-top: 20px;
            padding: 30px 150px;
            border: 2px dotted black;
            font-weight: 800;
        }
    }
`