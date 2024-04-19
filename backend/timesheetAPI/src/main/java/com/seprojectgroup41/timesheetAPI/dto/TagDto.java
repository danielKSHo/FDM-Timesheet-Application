package com.seprojectgroup41.timesheetAPI.dto;

import com.seprojectgroup41.timesheetAPI.entity.TagType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TagDto {
    private Long id;
    private TagType tagType;
    private String tagName;
    private Long creatorId;
}
