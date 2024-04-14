package io.nqa.nullam.repository;

import io.nqa.nullam.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
