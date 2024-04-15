package io.nqa.nullam.service;

import io.nqa.nullam.entity.Participant;
import io.nqa.nullam.model.ParticipantDTO;
import io.nqa.nullam.repository.OrganizationRepository;
import io.nqa.nullam.repository.ParticipantRepository;
import io.nqa.nullam.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ParticipantService implements IParticipantService {
    private final ParticipantRepository participantRepository;
    private final PersonRepository personRepository;
    private final OrganizationRepository organizationRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<Participant> getParticipants() {
        return this.participantRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Override
    public Participant getParticipantById(long id) {
        return this.participantRepository.findById(id).orElse(null);
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
            if (participant != null)
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
        if (participant.getPerson() != null)
            this.personRepository.save(participant.getPerson());
        if (participant.getOrganization() != null)
            this.organizationRepository.save(participant.getOrganization());
        // TODO: Only permit one (person or organization) per participant.
        return this.participantRepository.save(participant);
    }
}
