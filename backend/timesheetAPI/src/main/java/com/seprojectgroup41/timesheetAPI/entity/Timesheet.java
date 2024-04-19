package com.seprojectgroup41.timesheetAPI.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "submitted_timesheet")
public class Timesheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timesheet_id")
    private Long id;

    @Column(name = "approved", nullable = false)
    private Boolean approve;

    // private Employee employee;

}
