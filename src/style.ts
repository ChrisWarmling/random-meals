import styled from 'styled-components'
import { shade, opacify } from 'polished'

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 150px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    //margin: 0;
    /* max-width: 450px; */
    padding: 25px 0px 20px;
    background-color: #76C83C;
    h1 {
        /* margin-top: 15px; */
        font-size: 48px;
        line-height: 56px;
        color: #3C1C0B;
    }
    span {
        font-size: 48px;
        line-height: 56px;
        color: #E1186F;
    }
`
export const Button = styled.button`
    position: absolute;
    bottom: -25%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    width: 200px;
    height: 70px;
    font-size: 20px;
    background-color: #FD7831;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;    
    
    &:hover{
        background: ${shade(0.1, '#FD7831')};
    }
    &:active{
        background: ${opacify(0.9, '#FD7831')};
    }

`
export const Title = styled.div`
    margin-left: 20px;
    h1{
        display: inline-block;
        font-size: 30px;
        color: #E1186F;
    }
    span{
        display: inline-block;
        text-align: center;
        margin-left: 15px;
        background-color: #76C83C;
        padding: 4px;
        border-radius: 5px;
        color: #fff;
    }
    img{
        max-height: 40px;
        max-width: 40px;
        margin-left: 15px;
    }
`

export const ContainerImage = styled.figure`
    margin: 5px 20px 0 25px;
    img {
        max-width: 400px;
        max-height: 400px;
        border-radius: 25px;
    }
`
export const CenterCard = styled.main`
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const MealCard = styled.div`
    margin-right: 20px;
    max-width: 30%;
`

export const IngredientsCard = styled.ul`
    padding-top: 15px;
    max-width: 30%;
    margin: 0 30px 10px 0;
    h1{
        color: #76C83C;
        font-size: 25px;
    }
    li{
        list-style-type: none;
        font-size: 20px;
    }
`
export const InstrutionsCard = styled.div`
    max-width: 70vw;
    margin: 0 auto;
    h1{
        color: #FD7831;
        font-size: 25px;
        
    }
    p {
        font-size: 22px;
        line-height: 40px;

    }
`