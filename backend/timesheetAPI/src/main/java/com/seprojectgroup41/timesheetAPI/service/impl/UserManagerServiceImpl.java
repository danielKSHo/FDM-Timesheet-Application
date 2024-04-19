package com.seprojectgroup41.timesheetAPI.service.impl;

import com.seprojectgroup41.timesheetAPI.dto.EmployeeDto;
import com.seprojectgroup41.timesheetAPI.entity.Employee;
import com.seprojectgroup41.timesheetAPI.entity.Role;
import com.seprojectgroup41.timesheetAPI.exception.IncorrectRoleException;
import com.seprojectgroup41.timesheetAPI.repository.EmployeeRepository;
import com.seprojectgroup41.timesheetAPI.repository.InsertRepository;
import com.seprojectgroup41.timesheetAPI.repository.UserManagerRepository;
import com.seprojectgroup41.timesheetAPI.service.UserManagerService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserManagerServiceImpl implements UserManagerService {

    private EmployeeRepository employeeRepo;

    private InsertRepository repo;

    private UserManagerRepository userManagerRepo;

    private ModelMapper modelMapper;

    @Override
    public void insertManagerConsultantRelation(Long manager_id, Long consultant_id) {
        Employee manager = employeeRepo.findByIdAndRole(manager_id, Role.MANAGER).orElseThrow(
                () -> new IncorrectRoleException("This user is not a manager, request denied")
        );
        Employee consultant = employeeRepo.findByIdAndRole(consultant_id, Role.CONSULTANT).orElseThrow(
                () -> new IncorrectRoleException("This user is not a consultant, request denied")
        );

        repo.insertManagerAndConsultant(manager.getEmpId(), consultant.getEmpId());
    }

    @Override
    public List<EmployeeDto> getConsultantsManagedByManager(Long manager_id) {
        List<Employee> managedConsultants = new ArrayList<>();

        Employee manager =  employeeRepo.findByIdAndRole(manager_id, Role.MANAGER).orElseThrow(
                () -> new IncorrectRoleException("This user is not a manager, request denied")
        );

        List<Long> managedConsultantIds = userManagerRepo.getConsultantsManagedByManager(manager.getEmpId());

        for(Long id : managedConsultantIds) {
            managedConsultants.add(employeeRepo.findByIdNew(id));
        }

        return managedConsultants.stream().map((consultant) -> modelMapper.map(consultant, EmployeeDto.class))
                .collect(Collectors.toList());
    }
}
