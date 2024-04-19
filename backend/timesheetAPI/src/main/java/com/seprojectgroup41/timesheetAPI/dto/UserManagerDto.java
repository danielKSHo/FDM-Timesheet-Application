package com.seprojectgroup41.timesheetAPI.dto;

import com.seprojectgroup41.timesheetAPI.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserManagerDto {
    private Long id;
    private Long managerId;
    private Employee consultant;

}
