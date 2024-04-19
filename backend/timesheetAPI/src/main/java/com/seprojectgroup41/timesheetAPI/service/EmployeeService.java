package com.seprojectgroup41.timesheetAPI.service;

import com.seprojectgroup41.timesheetAPI.dto.EmployeeDto;
import com.seprojectgroup41.timesheetAPI.entity.Role;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface EmployeeService extends UserDetailsService {
    void deleteEmployee(Long employeeId);

    EmployeeDto getEmployeeByID(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    List<EmployeeDto> getAllEmployeesByRole(Role role);
}
