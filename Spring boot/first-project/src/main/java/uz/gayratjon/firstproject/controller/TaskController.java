package uz.gayratjon.firstproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.gayratjon.firstproject.dto.TaskDTO;
import uz.gayratjon.firstproject.entity.Task;
import uz.gayratjon.firstproject.service.TaskService;

@RestController
@RequestMapping("/api")
public class TaskController {
    @Autowired
    private TaskService taskService;
    @PostMapping("/create")
    public ResponseEntity<Task> create(@RequestBody TaskDTO dto){
        Task task = taskService.createTask(dto.getTitle() , dto.isCompleted());
        return ResponseEntity.ok(task);
    }

}
