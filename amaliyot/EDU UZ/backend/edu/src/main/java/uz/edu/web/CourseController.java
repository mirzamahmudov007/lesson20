package uz.edu.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.edu.entity.Course;
import uz.edu.service.CourseService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Course course){

        courseService.create(course);
        return ResponseEntity.ok("saved");
    }
}
