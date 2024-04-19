package com.seprojectgroup41.timesheetAPI.dto;

import java.util.HashMap;
import java.util.Date; // Import Date class

import com.seprojectgroup41.timesheetAPI.entity.Timeblock;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TimesheetDto {
    private Long id;
    private Boolean approve;
    // private HashMap<Long, Timeblock> timeLog;
    // private int[] hoursWorked;
    // private float expectedPay;
    // private Date dateTime;
}
