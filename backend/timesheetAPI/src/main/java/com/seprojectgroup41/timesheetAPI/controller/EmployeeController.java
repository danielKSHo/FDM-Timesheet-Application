package com.seprojectgroup41.timesheetAPI.controller;

import com.seprojectgroup41.timesheetAPI.dto.EmployeeDto;
import com.seprojectgroup41.timesheetAPI.entity.Role;
import com.seprojectgroup41.timesheetAPI.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeByID(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    // Build Get All Employees REST API
    @GetMapping("all")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    // Build update Employee REST API
    @PutMapping("update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
            @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    // Build delete Employee REST API
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully!");
    }

    @GetMapping("role/{role}")
    public ResponseEntity<List<EmployeeDto>> getAllEmployeesByRole(@PathVariable("role") Role role) {
        List<EmployeeDto> employees = employeeService.getAllEmployeesByRole(role);
        return ResponseEntity.ok(employees);
    }
}
