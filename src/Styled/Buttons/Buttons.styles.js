import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryBtn = styled(Link)`
    display: inline-block;
    background-color:#2f2f2f;
    border: 2px solid transparent;
    transition: 400ms ease-in-out;
    cursor: pointer;
    color: #fff;

    &:hover{
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
`
export const Button = styled.button`
        display: inline-block;
        background-color:#2f2f2f;
        border: 2px solid transparent;
        transition: 400ms ease-in-out;
        cursor: pointer;
        color: #fff;

    &:hover{
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
`