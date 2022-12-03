import styled from "styled-components";

export const HomeS = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;

    div{
    }
    .left{
        text-shadow: 2px 2px 5px #1111111f;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        .write{
            width: 70%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 350px;
            .title{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
            }
        }
        h1{
            font-size: 40px;
            margin-bottom: -20px;
        }
        h2{
            font-size: 34px;
            margin-bottom: 0px;
            span{
                color: ${({theme}) => theme.colors.primary};
            }
        }
        h3{
            background-color: ${({theme}) => theme.colors.primary};
            align-items: center;
            justify-content: center;
            display: flex;
            padding: 5px 10px;
            font-size: 15px;
            font-weight: 800;
            width: 50%;
            box-shadow: 2px 2px 5px #11111110;
            border-radius: 3px;
        }
        .bt{
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }
        button{
            background-color: ${({theme}) => theme.colors.primary};
            border: 0;
            padding: 15px;
            border-radius: 30px;
            color: white;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            :hover{
                background-color: #E89020;
            }
        }
    }




    .right{
        background-color: ${({theme}) => theme.colors.background};
        position: relative;
        display: flex;
        justify-content: center;
        width: 30%;
        img{
            width: 100%;
            position: absolute;
            bottom: 0;
        }

    }


`