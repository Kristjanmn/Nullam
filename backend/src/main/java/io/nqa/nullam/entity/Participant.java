package io.nqa.nullam.entity;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Database entity to hold Person OR Organization entity
 * Only one of the two should be present
 */
@Data
@Entity
@Table(name = "participant")
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @OneToOne
    private Person person;

    @OneToOne
    private Organization organization;
}
