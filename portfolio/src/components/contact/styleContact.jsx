import styled from "styled-components";

export const ContactS = styled.section`
    svg{
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }
    section{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        .links{
            display: flex;
            align-items: center;
            width: 50%;
            margin: 10px 0;
            a{
                color: black;
            }
        }
    }
`