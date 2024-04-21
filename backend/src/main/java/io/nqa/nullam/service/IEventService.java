package io.nqa.nullam.service;

import io.nqa.nullam.entity.Event;
import io.nqa.nullam.model.EventDTO;

import java.util.List;

public interface IEventService {
    /**
     * Get all events.
     *
     * @return All events from database
     */
    List<Event> getEvents();

    /**
     * Get all future events.
     *
     * @return List of upcoming events
     */
    List<Event> getUpcomingEvents();

    /**
     * Get all past events.
     *
     * @return List of past events
     */
    List<Event> getPastEvents();

    /**
     * Get one event by its database id;
     *
     * @param id Database ID
     * @return Event object
     */
    Event getEventById(long id);

    /**
     * Convert Event -> EventDTO
     * Used before sending data to client.
     *
     * @param event Object to convert
     * @return Converted Event
     */
    EventDTO eventToDto(Event event);

    /**
     * Convert EventDTO -> Event
     * Used before saving Event
     *
     * @param eventDTO Object to convert
     * @return Converted Event
     */
    Event dtoToEvent(EventDTO eventDTO);

    /**
     * Convert all Events to DTOs.
     *
     * @return List of DTOs
     */
    List<EventDTO> getEventDtos();

    /**
     * Get all future events as DTOs.
     *
     * @return List of DTOs
     */
    List<EventDTO> getUpcomingEventDtos();

    /**
     * Get all past events as DTOs
     *
     * @return List of DTOs
     */
    List<EventDTO> getPastEventDtos();

    /**
     * Get Event as DTO by database ID;
     *
     * @param id Database ID
     * @return Event DTO
     */
    EventDTO getEventDtoById(long id);

    /**
     * Save event.
     *
     * @param event Object to save
     * @return Saved Event object
     */
    Event saveEvent(Event event);

    /**
     * Delete event.
     *
     * @param id Database ID
     */
    void deleteEvent(long id);
}
