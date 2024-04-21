package io.nqa.nullam.controller;

import io.nqa.nullam.model.EventDTO;
import io.nqa.nullam.service.IEventService;
import io.nqa.nullam.util.StringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("event/")
public class EventController {
    private final IEventService eventService;

    @GetMapping
    public ResponseEntity<List<EventDTO>> getEvents() {
        return ResponseEntity.ok(this.eventService.getEventDtos());
    }

    @GetMapping("upcoming")
    public ResponseEntity<List<EventDTO>> getUpcomingEvents() {
        return ResponseEntity.ok(this.eventService.getUpcomingEventDtos());
    }

    @GetMapping("past")
    public ResponseEntity<List<EventDTO>> getPastEvents() {
        return ResponseEntity.ok(this.eventService.getPastEventDtos());
    }

    @GetMapping("{id}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable long id) {
        EventDTO eventDTO = this.eventService.getEventDtoById(id);
        if (eventDTO == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(eventDTO);
    }

    @PostMapping
    public ResponseEntity<EventDTO> saveEvent(@RequestBody final EventDTO eventDTO) {
        if (eventDTO == null || StringUtils.isAnyStringBlank(eventDTO.getName(), eventDTO.getLocation())
                || eventDTO.getDateTime() == null)
            return ResponseEntity.badRequest().build();

        return ResponseEntity.ok(
                this.eventService.eventToDto(
                        this.eventService.saveEvent(
                                this.eventService.dtoToEvent(eventDTO))));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable long id) {
        this.eventService.deleteEvent(id);
        return ResponseEntity.ok().build();
    }
}
