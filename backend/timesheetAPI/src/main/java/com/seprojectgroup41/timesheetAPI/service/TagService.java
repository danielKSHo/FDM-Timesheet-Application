package com.seprojectgroup41.timesheetAPI.service;

import com.seprojectgroup41.timesheetAPI.dto.TagDto;
import com.seprojectgroup41.timesheetAPI.entity.TagType;

import java.util.List;

public interface TagService {

    TagDto createTag(TagDto tagDto);

    void deleteTag(Long tag_id);

    TagDto updateTag(Long tag_id, TagDto updatedTag);

    List<TagDto> getAllTagsByType(TagType type);

    List<TagDto> getAllTagsByCreator(Long creator_id);

    List<TagDto> getAllTagsByTypeAndCreator(TagType type, Long creator_id);
}
