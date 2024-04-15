package io.nqa.nullam.model;

import io.nqa.nullam.enums.PaymentMethod;
import lombok.Data;

@Data
public class OrganizationDTO {
    private long id;
    private String name;
    private long registrationCode;
    private long participants;
    private PaymentMethod paymentMethod;
    private String additionalInfo;
}
