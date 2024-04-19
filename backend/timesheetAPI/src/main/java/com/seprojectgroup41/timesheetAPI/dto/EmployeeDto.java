package com.seprojectgroup41.timesheetAPI.dto;

import com.seprojectgroup41.timesheetAPI.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long empId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private Role role;
}
