package io.nqa.nullam.service;

import io.nqa.nullam.entity.Event;
import io.nqa.nullam.model.EventDTO;

import java.util.List;

public interface IEventService {
    List<Event> getEvents();
    List<Event> getUpcomingEvents();
    List<Event> getPastEvents();
    Event getEventById(long id);
    EventDTO eventToDto(Event event);
    Event dtoToEvent(EventDTO eventDTO);
    List<EventDTO> getEventDtos();
    List<EventDTO> getUpcomingEventDtos();
    List<EventDTO> getPastEventDtos();
    EventDTO getEventDtoById(long id);
    Event saveEvent(Event event);
    void deleteEvent(long id);
}
