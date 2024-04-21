package io.nqa.nullam.service;

import io.nqa.nullam.entity.Event;
import io.nqa.nullam.entity.Participant;
import io.nqa.nullam.model.EventDTO;
import io.nqa.nullam.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService implements IEventService {
    private final EventRepository eventRepository;
    private final IParticipantService participantService;
    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<Event> getEvents() {
        return this.eventRepository.findAll();
    }

    @Override
    public List<Event> getUpcomingEvents() {
        return this.eventRepository.findAllByDateTimeIsAfterOrderByDateTimeAsc(LocalDateTime.now()).orElse(null);
    }

    @Override
    public List<Event> getPastEvents() {
        return this.eventRepository.findAllByDateTimeIsBeforeOrderByDateTimeDesc(LocalDateTime.now()).orElse(null);
    }

    @Override
    public Event getEventById(long id) {
        return this.eventRepository.findById(id).orElse(null);
    }

    @Override
    public EventDTO eventToDto(Event event) {
        return this.modelMapper.map(event, EventDTO.class);
    }

    @Override
    public Event dtoToEvent(EventDTO eventDTO) {
        return this.modelMapper.map(eventDTO, Event.class);
    }

    @Override
    public List<EventDTO> getEventDtos() {
        List<EventDTO> dtos = new ArrayList<>();
        for (Event event : this.getEvents()) {
            if (event != null)
                dtos.add(this.eventToDto(event));
        }
        return dtos;
    }

    @Override
    public List<EventDTO> getUpcomingEventDtos() {
        List<EventDTO> dtos = new ArrayList<>();
        for (Event event : this.getUpcomingEvents()) {
            if (event != null)
                dtos.add(this.eventToDto(event));
        }
        return dtos;
    }

    @Override
    public List<EventDTO> getPastEventDtos() {
        List<EventDTO> dtos = new ArrayList<>();
        for (Event event : this.getPastEvents()) {
            if (event != null)
                dtos.add(this.eventToDto(event));
        }
        return dtos;
    }

    @Override
    public EventDTO getEventDtoById(long id) {
        Event event = this.getEventById(id);
        if (event == null)
            return null;
        return this.eventToDto(event);
    }

    @Override
    public Event saveEvent(Event event) {
        if (event.getParticipants() == null)
            event.setParticipants(new ArrayList<>());
        List<Participant> participants = new ArrayList<>();
        for (int i = 0; i < event.getParticipants().size(); i++) {
            participants.add(this.participantService.saveParticipant(event.getParticipants().get(i)));
        }
        event.setParticipants(participants);
        return this.eventRepository.save(event);
    }

    @Override
    public void deleteEvent(long id) {
        Event event = this.getEventById(id);
        event.setParticipants(null);
        event = this.saveEvent(event);
        this.eventRepository.delete(event);
    }
}
