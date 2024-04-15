package io.nqa.nullam.controller;

import io.nqa.nullam.model.OrganizationDTO;
import io.nqa.nullam.model.ParticipantDTO;
import io.nqa.nullam.model.PersonDTO;
import io.nqa.nullam.service.IParticipantService;
import io.nqa.nullam.util.NumberUtils;
import io.nqa.nullam.util.StringUtils;
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
        if (participantDTO == null || participantDTO.getPerson() == null && participantDTO.getOrganization() == null)
            return ResponseEntity.badRequest().build();
        if (participantDTO.getPerson() != null) {
            PersonDTO person = participantDTO.getPerson();
            // Verify that required parameters are present. These are full name, payment method and personal code.
            if (StringUtils.isAnyStringBlank(person.getFirstName(), person.getLastName()) ||
                    person.getPaymentMethod() == null || NumberUtils.intLength(person.getPersonalCode()) != 11)
                return ResponseEntity.badRequest().build();
        }
        if (participantDTO.getOrganization() != null) {
            OrganizationDTO org = participantDTO.getOrganization();
            // Verify that required parameters are present. These are name, registration code and payment method.
            if (StringUtils.isAnyStringBlank(org.getName()) || org.getRegistrationCode() == 0 || org.getPaymentMethod() == null)
                return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(
                this.participantService.participantToDto(
                        this.participantService.saveParticipant(
                                this.participantService.dtoToParticipant(participantDTO))));
    }
}
