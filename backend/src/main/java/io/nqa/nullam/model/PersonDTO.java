package io.nqa.nullam.model;

import io.nqa.nullam.enums.PaymentMethod;
import lombok.Data;

@Data
public class PersonDTO {
    private long id;
    private String firstName;
    private String lastName;
    private int personalCode;
    private PaymentMethod paymentMethod;
    private String additionalInfo;
}
