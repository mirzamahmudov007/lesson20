package uz.gayratjon.firstproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.gayratjon.firstproject.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
