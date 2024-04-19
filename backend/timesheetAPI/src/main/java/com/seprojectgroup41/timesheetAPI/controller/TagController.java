package com.seprojectgroup41.timesheetAPI.controller;

import com.seprojectgroup41.timesheetAPI.dto.TagDto;
import com.seprojectgroup41.timesheetAPI.entity.TagType;
import com.seprojectgroup41.timesheetAPI.service.impl.TagServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/tags")
public class TagController {

    private TagServiceImpl tagService;

    @PostMapping("create")
    public ResponseEntity<TagDto> createTag(@RequestBody TagDto tagDto) {
        TagDto savedTag = tagService.createTag(tagDto);
        return new ResponseEntity<>(savedTag, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTag(@PathVariable("id") Long tagId) {
        tagService.deleteTag(tagId);
        return ResponseEntity.ok("Tag deleted successfully!");
    }

    @PutMapping("{id}")
    public ResponseEntity<TagDto> updateTag(@PathVariable("id") Long tagId, @RequestBody TagDto tagDto) {
        TagDto updatedTag = tagService.updateTag(tagId, tagDto);
        return ResponseEntity.ok(updatedTag);
    }

    @GetMapping("get_by_type/{type}")
    public ResponseEntity<List<TagDto>> getTagsByType(@PathVariable("type") TagType type) {
        List<TagDto> tagsByTypeList = tagService.getAllTagsByType(type);
        return ResponseEntity.ok(tagsByTypeList);
    }

    @GetMapping("get_by_creator/{id}")
    public ResponseEntity<List<TagDto>> getTagsByCreator(@PathVariable("id") Long creatorId) {
        List<TagDto> tagsByCreatorList = tagService.getAllTagsByCreator(creatorId);
        return ResponseEntity.ok(tagsByCreatorList);
    }

    @GetMapping("get_by_{type}_and_{id}")
    public ResponseEntity<List<TagDto>> getTagsByTypeAndCreator(@PathVariable("type") TagType type,
                                                                @PathVariable("id") Long creatorId) {
        List<TagDto> tagsByAllList = tagService.getAllTagsByTypeAndCreator(type, creatorId);
        return ResponseEntity.ok(tagsByAllList);
    }
}
