package com.seprojectgroup41.timesheetAPI.repository;

import com.seprojectgroup41.timesheetAPI.entity.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {
    @Query("SELECT t from Timesheet t WHERE t.approve = false")
    List<Timesheet> getByApproved();

    @Query("SELECT t from Timesheet t ORDER BY t.id ASC")
    List<Timesheet> getAllSorted();
}