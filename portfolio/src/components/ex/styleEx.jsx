import styled from "styled-components";

export const ExS = styled.section`

.exPS{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
    .study{
        width: 35%;
        background-color: black;
        color: white;
        padding: 10px;
        

        h2{
            text-indent: 10px;
        }
        li{
            font-size: 12px;
            list-style: square;
            margin-left: -20px;
            margin-bottom: 15px;
        }
    }
    .profission{
        width: 60%;
        .lineBottom{
            border-bottom: 3px dashed black;
        }
        li{
            list-style: square;
            font-size: 14px;
        }
    }
`