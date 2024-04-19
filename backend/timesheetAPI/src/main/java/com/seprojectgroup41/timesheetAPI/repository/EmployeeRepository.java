package com.seprojectgroup41.timesheetAPI.repository;

import com.seprojectgroup41.timesheetAPI.entity.Employee;
import com.seprojectgroup41.timesheetAPI.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByUsername(String username);

    @Query("Select e From Employee e WHERE e.empId = ?1")
    Employee findByIdNew(Long id);

    @Query("SELECT e FROM Employee e WHERE e.role = ?1")
    List<Employee> getAllEmployeesByRole(Role role);

    @Query("SELECT e FROM Employee e WHERE e.empId = ?1 AND e.role = ?2")
    Optional<Employee> findByIdAndRole(Long manager_id, Role role);
}
