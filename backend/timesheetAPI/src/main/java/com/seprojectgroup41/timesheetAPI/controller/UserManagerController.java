package com.seprojectgroup41.timesheetAPI.controller;

import com.seprojectgroup41.timesheetAPI.dto.EmployeeDto;
import com.seprojectgroup41.timesheetAPI.service.impl.UserManagerServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/manager-to-consultant")
public class UserManagerController {

    private UserManagerServiceImpl userManagerService;

    @GetMapping("/{manager_id}/to/{consultant_id}")
    public ResponseEntity<String> linkManagerToConsultant(@PathVariable("manager_id") Long manager_id,
                                                          @PathVariable("consultant_id") Long consultant_id) {
        userManagerService.insertManagerConsultantRelation(manager_id, consultant_id);
        return ResponseEntity.ok("Consultant assigned to Manager successfully");
    }

    @GetMapping("/consultants/managed_by/{id}")
    public ResponseEntity<List<EmployeeDto>> getConsultantsManagedByManager(@PathVariable("id") Long manager_id) {
        return ResponseEntity.ok(userManagerService.getConsultantsManagedByManager(manager_id));
    }
}
