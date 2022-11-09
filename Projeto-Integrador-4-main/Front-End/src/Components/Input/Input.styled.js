import styled from "styled-components";

export const StyledInput = styled.input`
    display:flex;
    flex-direction:column;
    align-items:center;

    width: 80%;
    height: 50%;
    max-width: 200x;
    max-height: 40px;
    margin: 0.5rem 0;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 0 1rem;
    &:focus{
        outline: none;
        border: 0.1rem solid #15cdfc;;
    }
`;