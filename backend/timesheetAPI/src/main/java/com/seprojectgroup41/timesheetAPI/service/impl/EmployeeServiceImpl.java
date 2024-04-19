package com.seprojectgroup41.timesheetAPI.service.impl;

import com.seprojectgroup41.timesheetAPI.dto.EmployeeDto;
import com.seprojectgroup41.timesheetAPI.entity.Employee;
import com.seprojectgroup41.timesheetAPI.entity.Role;
import com.seprojectgroup41.timesheetAPI.entity.Token;
import com.seprojectgroup41.timesheetAPI.exception.ResourceNotFoundException;
import com.seprojectgroup41.timesheetAPI.repository.*;
import com.seprojectgroup41.timesheetAPI.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepo;

    private TokenRepository tokenRepo;

    private ModelMapper modelMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return employeeRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        employeeRepo.findById(employeeId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("No employee found with the given id " + employeeId));

        List<Token> tokensByUser = tokenRepo.findAllTokensByUserLoggedOutTrue(employeeId);

        for (Token item : tokensByUser) {
            tokenRepo.deleteById(item.getId());
        }

        employeeRepo.deleteById(employeeId);
    }

    @Override
    public EmployeeDto getEmployeeByID(Long employeeId) {
        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("There is no Employee for the given id: " + employeeId));
        return modelMapper.map(employee, EmployeeDto.class);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepo.findAll();
        return employees.stream().map((employee) -> modelMapper.map(employee, EmployeeDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepo.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist for the given id: " + employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setUsername(updatedEmployee.getUsername());
        employee.setRole(updatedEmployee.getRole());

        Employee updatedEmployeeObj = employeeRepo.save(employee);

        return modelMapper.map(updatedEmployeeObj, EmployeeDto.class);
    }

    @Override
    public List<EmployeeDto> getAllEmployeesByRole(Role role) {
        List<Employee> employees = employeeRepo.getAllEmployeesByRole(role);
        return employees.stream().map((employee) -> modelMapper.map(employee, EmployeeDto.class))
                .collect(Collectors.toList());
    }

}
