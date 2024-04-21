package io.nqa.nullam.repository;

import io.nqa.nullam.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    Optional<List<Event>> findAllByDateTimeIsBeforeOrderByDateTimeDesc(LocalDateTime dateTime);
    Optional<List<Event>> findAllByDateTimeIsAfterOrderByDateTimeAsc(LocalDateTime dateTime);
}
