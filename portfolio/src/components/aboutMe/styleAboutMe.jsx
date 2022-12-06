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
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .iDo{
        background-color: black;
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        h1{
            
        }
        div{
            width: 80%;
            height: 80%;

            .tec{
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100px;
                width: 100%;
                svg{
                    width: 40px;
                    height: 40px;
                    
                }
            :first-of-type{
                border-bottom: 2px dashed ${({ theme }) => theme.colors.primary};
            }
            }
        }
    }
    .iNow{
        width: 38%;
        h1{
            font-size: 25px;
            margin: 0;
        }
        p{
            font-size: 14px;
        }
    }





    @media screen and (max-width: 900px){
        .flex{
            flex-direction: column  ;
        }
        .iDo{
            width: 100%;
        }
        .iNow{
            margin-top: 20px;
            width: 100%;
        }

    }
`