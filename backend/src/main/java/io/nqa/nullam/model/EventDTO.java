package io.nqa.nullam.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EventDTO {
    private long id;
    private String name;
    private LocalDateTime dateTime;
    private String location;
    private String additionalInfo;
}
