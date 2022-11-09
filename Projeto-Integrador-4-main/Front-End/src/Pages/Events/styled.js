import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventsContent = styled.div`
  display: flex;
`;

export const EventsContentFilterTitle = styled.h4`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const EventsContentContainer = styled.div`
  display: flex;
`;
export const EventsContentFilters = styled.div`
  text-align: center;
  width: 15vw;
  height: fit-content;
  background-color: rgb(230, 227, 227);
  margin: 2vh;
  border-radius: 4px;
  position: sticky;
  top: 2vh;
  z-index: 10;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const EventsContentTable = styled.div`
  width: fit-content;
`;
export const EventsContentTableItem = styled(Link)`
  border: 0.1rem solid rgba(255, 255, 255, 0.178);
  border-radius: 4px;
  padding: 0.5rem;
  margin: 2vh 2vw 2vh 2vh;
  display: flex;
  display: block;
  width: 50vw;
  background-color: rgb(230, 227, 227);
  text-decoration: none;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  &:hover {
    transform: scale(1.01);
    transition: ease-out 200ms;
  }
`;
export const EventsContentTableTitle = styled.h4`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
export const EventsContentTableImage = styled.img`
  display: inline-block;
  width: 100%;
  padding: 4rem;
  border-radius: 4px;
  background-color: white;
`;
export const EventsContentTableInfo = styled.p`
  display: inline;
  font-weight: bold;
  color: #fff;
`;

export const EventsContentTableValue = styled.li`
  list-style: none;
  font-weight: bold;
  color: black;
  font-size: 14px;
`;

export const EventsContentTableLocation = styled.li`
  list-style: none;
  font-weight: bold;
  color: black;
  font-size: 14px;
`;

export const EventsContentFilterInput = styled.input`
  border: none;
  border-radius: 4px;
  margin: 0 0 2vh;
`;

export const EventsContentFilterLocation = styled.select`
  border-radius: 4px;
  font-weight: bold;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-left: 24px;
  /* &:hover{
        background-color: #15cdfc;
    } */
`;

export const EventsContentFilerLocationItem = styled.option`
  color: white;
`;
