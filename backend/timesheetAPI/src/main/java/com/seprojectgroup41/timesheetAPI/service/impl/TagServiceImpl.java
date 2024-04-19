package com.seprojectgroup41.timesheetAPI.service.impl;

import com.seprojectgroup41.timesheetAPI.dto.TagDto;
import com.seprojectgroup41.timesheetAPI.entity.Tag;
import com.seprojectgroup41.timesheetAPI.entity.TagType;
import com.seprojectgroup41.timesheetAPI.exception.ResourceNotFoundException;
import com.seprojectgroup41.timesheetAPI.repository.TagRepository;
import com.seprojectgroup41.timesheetAPI.service.TagService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TagServiceImpl implements TagService {

    private TagRepository tagRepo;

    private ModelMapper modelMapper;

    @Override
    public TagDto createTag(TagDto tagDto) {
        tagRepo.save(modelMapper.map(tagDto, Tag.class));
        return tagDto;
    }

    @Override
    public void deleteTag(Long tag_id) {
        tagRepo.findById(tag_id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("No tag found with given tag_id" + tag_id)
                );

        tagRepo.deleteById(tag_id);
    }

    @Override
    public TagDto updateTag(Long tag_id, TagDto updatedTag) {
        Tag tag = tagRepo.findById(tag_id).orElseThrow(
                () -> new ResourceNotFoundException("No tag found with given tag_id" + tag_id)
        );

        tag.setTagName(updatedTag.getTagName());
        tag.setTagType(updatedTag.getTagType());

        Tag updatedTagObj = tagRepo.save(tag);

        return modelMapper.map(updatedTagObj, TagDto.class);
    }

    @Override
    public List<TagDto> getAllTagsByType(TagType type) {
        List<Tag> tagsByType = tagRepo.getAllTagsByType(type);
        return tagsByType.stream().map((tag) -> modelMapper.map(tag, TagDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TagDto> getAllTagsByCreator(Long creator_id) {
        List<Tag> tagsByCreator = tagRepo.getAllTagsByCreatorId(creator_id);
        return tagsByCreator.stream().map((tag) -> modelMapper.map(tag, TagDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TagDto> getAllTagsByTypeAndCreator(TagType type, Long creator_id) {
        List<Tag> tags = tagRepo.getAllTagsByTypeAndCreator(type, creator_id);
        return tags.stream().map((tag) -> modelMapper.map(tag, TagDto.class))
                .collect(Collectors.toList());
    }
}
