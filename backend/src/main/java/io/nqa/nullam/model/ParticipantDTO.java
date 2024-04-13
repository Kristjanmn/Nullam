package io.nqa.nullam.model;

import lombok.Data;

@Data
public class ParticipantDTO {
    private long id;
    private PersonDTO person;
    private OrganizationDTO organization;
}
