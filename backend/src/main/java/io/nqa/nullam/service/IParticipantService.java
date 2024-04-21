package io.nqa.nullam.service;

import io.nqa.nullam.entity.Participant;
import io.nqa.nullam.model.ParticipantDTO;

import java.util.List;

public interface IParticipantService {
    /**
     * Get all participants from database.
     *
     * @return All participants from database
     */
    List<Participant> getParticipants();

    /**
     * Get participant by database ID.
     *
     * @param id Database ID
     * @return Participant object
     */
    Participant getParticipantById(long id);

    /**
     * Convert Participant -> ParticipantDTO
     * Used before sending data to client.
     *
     * @param participant Object to convert
     * @return Converted object
     */
    ParticipantDTO participantToDto(Participant participant);

    /**
     * Convert ParticipantDTO -> Participant
     * Used before saving data.
     *
     * @param participantDTO Object to convert
     * @return Converted object
     */
    Participant dtoToParticipant(ParticipantDTO participantDTO);

    /**
     * Get all participants as DTOs.
     *
     * @return List of Participants as DTOs
     */
    List<ParticipantDTO> getParticipantDtos();

    /**
     * Get participant by database ID as DTO.
     *
     * @param id Database ID
     * @return Participant as DTO
     */
    ParticipantDTO getParticipantDtoById(long id);

    /**
     * Save participant to database.
     *
     * @param participant Object to save
     * @return Saved Participant object
     */
    Participant saveParticipant(Participant participant);
}
