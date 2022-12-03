import styled from "styled-components";

export const AsideS = styled.aside`
 aside{
        position: fixed;
        height: 100vh;
        top: 0;
        left: 0;
        width: 15%;
        background-color: ${({ theme }) => theme.colors.primary};

        .foto{
            height: 250px;
            background-color: ${({theme}) => theme.colors.background};
            width: 100%;
            position: relative;
            img{
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
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