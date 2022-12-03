import styled from "styled-components";

export const ExS = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .study{
        width: 35%;
        background-color: black;
        color: white;
        padding: 10px;
        

        h2{
            text-indent: 10px;
        }
        li{
            font-size: 13px;
            list-style: square;
            margin-left: -20px;
            margin-bottom: 15px;
        }
    }
`