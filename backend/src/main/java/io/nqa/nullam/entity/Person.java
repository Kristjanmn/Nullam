package io.nqa.nullam.entity;

import io.nqa.nullam.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private long personalCode;

    @Column(nullable = false)
    private PaymentMethod paymentMethod;
    private String additionalInfo;
}
