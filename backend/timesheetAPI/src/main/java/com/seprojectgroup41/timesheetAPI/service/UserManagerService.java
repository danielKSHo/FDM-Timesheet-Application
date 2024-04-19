package com.seprojectgroup41.timesheetAPI.service;

import com.seprojectgroup41.timesheetAPI.dto.EmployeeDto;

import java.util.List;

public interface UserManagerService {

    void insertManagerConsultantRelation(Long manager_id, Long consultant_id);

    List<EmployeeDto> getConsultantsManagedByManager(Long manager_id);
}
