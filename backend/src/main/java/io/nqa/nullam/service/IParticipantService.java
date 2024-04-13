package io.nqa.nullam.service;

import io.nqa.nullam.entity.Participant;
import io.nqa.nullam.model.ParticipantDTO;

import java.util.List;

public interface IParticipantService {
    List<Participant> getParticipants();
    Participant getParticipantById(long id);
    ParticipantDTO participantToDto(Participant participant);
    Participant dtoToParticipant(ParticipantDTO participantDTO);
    List<ParticipantDTO> getParticipantDtos();
    ParticipantDTO getParticipantDtoById(long id);
    Participant saveParticipant(Participant participant);
}
