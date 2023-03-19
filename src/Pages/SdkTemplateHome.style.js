import styled from "styled-components";

export const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
    .template_header {
        font-size: larger;
        font-weight: bolder;
        padding: 25px 0;
        background-color: blueviolet;
        width: 100%;
        color: beige;
        text-align: center;
    }
    .template_body {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 30px 0px;
        width: 100%;
        overflow: hidden;
        color: #696969;
        height: 100%;
    }
`