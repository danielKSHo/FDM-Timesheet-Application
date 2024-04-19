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
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long id;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "tag_type")
    private TagType tagType;

    @Column(name = "name")
    private String tagName;

    @Column(name = "creator_id", unique = true)
    private Long creatorId;
}
