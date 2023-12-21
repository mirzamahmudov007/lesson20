package uz.gayratjon.firstproject.service;

import uz.gayratjon.firstproject.entity.Task;

public interface TaskService {
    Task createTask(String title, boolean completed);
}
