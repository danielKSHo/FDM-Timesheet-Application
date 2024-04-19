package com.seprojectgroup41.timesheetAPI.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "timeblock")
public class Timeblock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timeblock_id")
    private Long id;

    @Column(name = "clock_in_time")
    private String clockInTime;

    @Column(name = "clock_out_time")
    private String clockOutTime;

    @ManyToMany
    @JoinTable(name = "timeblock_tag", joinColumns = @JoinColumn(name = "timeblock_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private List<Tag> tags;

    @Column(name = "timeblock_evidence")
    private String evidence;

    // Getters and setters
}
