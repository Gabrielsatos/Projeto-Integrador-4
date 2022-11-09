import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  * {
    font-weight: bold;
  }
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 18px;
  width: 65%;
  height: 50vh;

  div {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 40%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: white;
    margin-top: 10px;
    text-align: center;
  }

  p {
    color: white;
    text-align: center;
  }
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: bold;
  background: #15cdfc;

  width: 15vw;
  height: 5vw;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
