import styled from "styled-components";

export const PortS = styled.section`
    .portfolio{
        margin-bottom: 50px;
        .flexTitle{
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
                font-size: 13px;
                color: #C4C4C4;
            }
        }
    }
    .projects{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .eachProject{
            background-color: black;
            color: white;
            width: 100%;
            height: 430px;
            padding: 5px 0;
            
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: white;
                text-decoration: none;
            }
            img{
                width: 100%;
                height: 230px;
                border-radius: 5px;
            }
        
            .write{
                width: 80%;
                .title{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    margin-bottom: -30px;
                }
                span{
                    font-size: 10px;
                }
                p{
                    text-align: justify;
                    font-size: 14px;
                    font-weight: 300;
                }
                .less{
                    font-size: 10px;
                }
            }
        }
    }
`