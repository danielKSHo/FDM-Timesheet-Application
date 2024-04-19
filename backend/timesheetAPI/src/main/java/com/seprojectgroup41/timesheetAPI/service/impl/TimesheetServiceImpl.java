package com.seprojectgroup41.timesheetAPI.service.impl;

import com.seprojectgroup41.timesheetAPI.dto.TimesheetDto;
import com.seprojectgroup41.timesheetAPI.entity.Timesheet;
import com.seprojectgroup41.timesheetAPI.exception.ResourceNotFoundException;
import com.seprojectgroup41.timesheetAPI.repository.TimesheetRepository;
import com.seprojectgroup41.timesheetAPI.service.TimesheetService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TimesheetServiceImpl implements TimesheetService {

    private TimesheetRepository timesheetRepo;

    private ModelMapper modelMapper;

    // creates a timesheet
    @Override
    public TimesheetDto createTimesheet(TimesheetDto timesheetDto) {
        timesheetRepo.save(modelMapper.map(timesheetDto, Timesheet.class));
        return timesheetDto;
    }

    // updates timesheet if approved by manager
    @Override
    public TimesheetDto approveTimesheet(Long timesheetId) {
        Timesheet timesheet = timesheetRepo.findById(timesheetId).orElseThrow(
                () -> new ResourceNotFoundException("No timesheet exists for given id" + timesheetId)
        );

        timesheet.setApprove(true);

        Timesheet updatedTimeSheet = timesheetRepo.save(timesheet);

        return modelMapper.map(updatedTimeSheet, TimesheetDto.class);
    }

    @Override
    public List<TimesheetDto> getAllTimeSheet() {
        List<Timesheet> timesheets = timesheetRepo.getAllSorted();
        return timesheets.stream().map((timesheet) -> modelMapper.map(timesheet, TimesheetDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TimesheetDto> getAllByApproved() {
        return timesheetRepo.getByApproved().stream().map((timesheet) -> modelMapper.map(timesheet, TimesheetDto.class))
                .collect(Collectors.toList());
    }
}
