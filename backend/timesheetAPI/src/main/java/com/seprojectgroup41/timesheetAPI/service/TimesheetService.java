package com.seprojectgroup41.timesheetAPI.service;


import com.seprojectgroup41.timesheetAPI.dto.TimesheetDto;

import java.sql.Time;
import java.util.List;

public interface TimesheetService {

    TimesheetDto createTimesheet(TimesheetDto timesheetDto);

    TimesheetDto approveTimesheet(Long timesheetId);

    List<TimesheetDto> getAllTimeSheet();

    List<TimesheetDto> getAllByApproved();
}
