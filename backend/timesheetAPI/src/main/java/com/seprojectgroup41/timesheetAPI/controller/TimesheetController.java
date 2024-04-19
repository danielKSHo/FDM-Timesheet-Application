package com.seprojectgroup41.timesheetAPI.controller;

import com.seprojectgroup41.timesheetAPI.dto.TimesheetDto;
import com.seprojectgroup41.timesheetAPI.service.impl.TimesheetServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/timesheet")
public class TimesheetController {

    private TimesheetServiceImpl timesheetService;

    @PostMapping("create")
    public ResponseEntity<TimesheetDto> createTimesheet(@RequestBody TimesheetDto timesheetDto) {
        return ResponseEntity.ok(timesheetService.createTimesheet(timesheetDto));
    }

    @PutMapping("approve/{id}")
    public ResponseEntity<TimesheetDto> approveTimesheet(@PathVariable("id") Long timesheetId) {
        return ResponseEntity.ok(timesheetService.approveTimesheet(timesheetId));
    }

    @GetMapping("all")
    public ResponseEntity<List<TimesheetDto>> getAllTimesheet() {
        return ResponseEntity.ok(timesheetService.getAllTimeSheet());
    }

    @GetMapping("to-be-approved")
    public ResponseEntity<List<TimesheetDto>> getAllByApproved() {
        return ResponseEntity.ok(timesheetService.getAllByApproved());
    }
}
