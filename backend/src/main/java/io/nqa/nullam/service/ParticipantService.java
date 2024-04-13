package io.nqa.nullam.service;

import io.nqa.nullam.entity.Participant;
import io.nqa.nullam.model.ParticipantDTO;
import io.nqa.nullam.repository.ParticipantRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ParticipantService implements IParticipantService {
    private final ParticipantRepository repository;
    private final ModelMapper modelMapper;

    @Override
    public List<Participant> getParticipants() {
        return this.repository.findAll();
    }

    @Override
    public Participant getParticipantById(long id) {
        return this.repository.findById(id).orElse(null);
    }

    @Override
    public ParticipantDTO participantToDto(Participant participant) {
        return this.modelMapper.map(participant, ParticipantDTO.class);
    }

    @Override
    public Participant dtoToParticipant(ParticipantDTO participantDTO) {
        return this.modelMapper.map(participantDTO, Participant.class);
    }

    @Override
    public List<ParticipantDTO> getParticipantDtos() {
        List<ParticipantDTO> dtos = new ArrayList<>();
        for (Participant participant : this.getParticipants()) {
            dtos.add(this.participantToDto(participant));
        }
        return dtos;
    }

    @Override
    public ParticipantDTO getParticipantDtoById(long id) {
        Participant participant = this.getParticipantById(id);
        if (participant == null)
            return null;
        return this.participantToDto(participant);
    }

    @Override
    public Participant saveParticipant(Participant participant) {
        return this.repository.save(participant);
    }
}
