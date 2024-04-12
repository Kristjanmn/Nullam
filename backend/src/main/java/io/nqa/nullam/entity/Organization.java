package io.nqa.nullam.entity;

import io.nqa.nullam.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "organization")
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int registrationCode;

    @Column(nullable = false)
    private int participants;

    @Column(nullable = false)
    private PaymentMethod paymentMethod;
    private String additionalInfo;
}
