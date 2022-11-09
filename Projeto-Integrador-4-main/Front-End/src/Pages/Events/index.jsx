import React from "react";
import {
  EventsContent,
  EventsContentContainer,
  EventsContentFilters,
  EventsContentFilterTitle,
  EventsContentTable,
  EventsContentTableItem,
  EventsContentTableTitle,
  EventsContentTableImage,
  EventsContentTableInfo,
  EventsContentTableValue,
  EventsContentTableLocation,
  EventsContentFilterInput,
  EventsContentFilterLocation,
  EventsContentFilerLocationItem,
} from "./styled.js";

const Events = () => {
  return (
    <EventsContent className="events">
      <EventsContentContainer>
        <EventsContentFilters>
          <EventsContentFilterTitle>Filtros</EventsContentFilterTitle>
          <EventsContentFilterLocation>
            <EventsContentFilerLocationItem value="Estados">
              Estados
            </EventsContentFilerLocationItem>
            <EventsContentFilerLocationItem value="Estados">
              MG
            </EventsContentFilerLocationItem>
            <EventsContentFilerLocationItem value="Estados">
              RJ
            </EventsContentFilerLocationItem>
            <EventsContentFilerLocationItem value="Estados">
              SP
            </EventsContentFilerLocationItem>
            <EventsContentFilerLocationItem value="Estados">
              PR
            </EventsContentFilerLocationItem>
            <EventsContentFilerLocationItem value="Estados">
              AM
            </EventsContentFilerLocationItem>
            <EventsContentFilerLocationItem value="Estados">
              SC
            </EventsContentFilerLocationItem>
          </EventsContentFilterLocation>
        </EventsContentFilters>
        <EventsContentTable>
          <EventsContentTableItem>
            <EventsContentTableTitle>Event Name</EventsContentTableTitle>
            <EventsContentTableImage></EventsContentTableImage>
            <EventsContentTableInfo>Informacao</EventsContentTableInfo>
            <EventsContentTableValue>Valor</EventsContentTableValue>
            <EventsContentTableLocation>Localização</EventsContentTableLocation>
          </EventsContentTableItem>
          <EventsContentTableItem>
            <EventsContentTableTitle>Event Name</EventsContentTableTitle>
            <EventsContentTableImage></EventsContentTableImage>
            <EventsContentTableInfo>Informacao</EventsContentTableInfo>
            <EventsContentTableValue>Valor</EventsContentTableValue>
            <EventsContentTableLocation>Localização</EventsContentTableLocation>
          </EventsContentTableItem>
          <EventsContentTableItem>
            <EventsContentTableTitle>Event Name</EventsContentTableTitle>
            <EventsContentTableImage></EventsContentTableImage>
            <EventsContentTableInfo>Informacao</EventsContentTableInfo>
            <EventsContentTableValue>Valor</EventsContentTableValue>
            <EventsContentTableLocation>Localização</EventsContentTableLocation>
          </EventsContentTableItem>
          <EventsContentTableItem>
            <EventsContentTableTitle>Event Name</EventsContentTableTitle>
            <EventsContentTableImage></EventsContentTableImage>
            <EventsContentTableInfo>Informacao</EventsContentTableInfo>
            <EventsContentTableValue>Valor</EventsContentTableValue>
            <EventsContentTableLocation>Localização</EventsContentTableLocation>
          </EventsContentTableItem>
        </EventsContentTable>
      </EventsContentContainer>
    </EventsContent>
  );
};

export default Events;
