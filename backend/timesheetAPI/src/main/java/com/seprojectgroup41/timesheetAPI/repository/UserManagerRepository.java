package com.seprojectgroup41.timesheetAPI.repository;

import com.seprojectgroup41.timesheetAPI.entity.UserManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserManagerRepository extends JpaRepository<UserManager, Long> {

    // link a consultant to manager
    // PERFORMED IN InsertRepository CLASS

    // return all consultants managed by a manager
    @Query("SELECT DISTINCT consultantId FROM UserManager WHERE managerId = ?1")
    List<Long> getConsultantsManagedByManager(Long manager_id);
}
