package io.nqa.nullam.controller;

import io.nqa.nullam.model.ParticipantDTO;
import io.nqa.nullam.service.IParticipantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("participant/")
public class ParticipantController {
    private final IParticipantService participantService;

    @GetMapping
    public ResponseEntity<List<ParticipantDTO>> getParticipants()
    {
        return ResponseEntity.ok(this.participantService.getParticipantDtos());
    }

    @GetMapping("{id}")
    public ResponseEntity<ParticipantDTO> getParticipantById(@PathVariable long id) {
        ParticipantDTO participantDTO = this.participantService.getParticipantDtoById(id);
        if (participantDTO == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(participantDTO);
    }

    @PostMapping
    public ResponseEntity<ParticipantDTO> saveParticipant(@RequestBody final ParticipantDTO participantDTO) {
        return ResponseEntity.ok(
                this.participantService.participantToDto(
                        this.participantService.saveParticipant(
                                this.participantService.dtoToParticipant(participantDTO))));
    }
}
