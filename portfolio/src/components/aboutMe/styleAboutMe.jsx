import styled from "styled-components";

export const AboutMeS = styled.section`
    display: flex;
    flex-direction: column;
    .textAboutMe{

        h1{
            margin: 0;
            font-weight: 300;
            font-size: 32px;
        }
        p{
            text-align: justify;
            font-size: 15px;
            text-indent: 15px;
        }
        font-weight: 400;
    }
    .iDo{
        background-color: black;
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            width: 80%;
            height: 80%;
        }
    }


`