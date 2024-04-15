package io.nqa.nullam.service;

import io.nqa.nullam.entity.Event;
import io.nqa.nullam.model.EventDTO;
import io.nqa.nullam.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService implements IEventService {
    private final EventRepository eventRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<Event> getEvents() {
        return this.eventRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
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
        return this.eventRepository.save(event);
    }
}
