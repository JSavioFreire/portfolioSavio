import styled from "styled-components";

export const AsideS = styled.aside`
 aside{
        position: fixed;
        height: 100vh;
        top: 0;
        left: 0;
        width: 20%;
        background-color: ${({ theme }) => theme.colors.primary};

        .foto{
            height: 200px;
            background-color: white;
            width: 100%;
        }
        .linha{
            position: absolute;
            top: 40px;
            height: 80%;
            width: 1px;
            border-right: 2px dotted black;
        }
        nav{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 450px;
            position: relative;
            flex-direction: column;

            ul{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                height: 70%;
            }
            li{
                font-size: 22px;
                list-style-type: none;
                margin-left: -40px;
                z-index: 1;
                background-color: ${({theme}) => theme.colors.primary};
                padding: 10px;
                cursor: pointer;
            }
        }

    }
`