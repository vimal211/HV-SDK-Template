import styled from "styled-components";

export const StyledTemplateCard = styled.div`
    width: 20%;
    height: fit-content;
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #d5d5d5;
    border-radius: 5px;
    box-shadow: 0px 11px 11px #14141473;
    .template {
        &_title {
            font-weight: bold;
            text-transform: capitalize;
            border-bottom: 1px solid black;
            width: 100%;
            text-align: center;
            padding-bottom: 5px;
        }
        &_record_btn {
            cursor: pointer;
            background-color: #934949;
            color: #d5d5d5;
            padding: 5px 15px;
            border-radius: 5px;
        }
        &_description{
            min-height: 40px;
        }
    }
`