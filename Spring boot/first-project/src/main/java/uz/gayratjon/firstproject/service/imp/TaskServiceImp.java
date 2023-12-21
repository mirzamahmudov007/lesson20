package uz.gayratjon.firstproject.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uz.gayratjon.firstproject.entity.Task;
import uz.gayratjon.firstproject.repository.TaskRepository;
import uz.gayratjon.firstproject.service.TaskService;

import java.time.LocalDate;

@Service
public class TaskServiceImp implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task createTask(String title, boolean completed) {
        Task task = new Task();
        task.setTitle(title);
        task.setCompleted(completed);
        task.setCreateDate(LocalDate.now());
        return taskRepository.save(task);
    }
}
