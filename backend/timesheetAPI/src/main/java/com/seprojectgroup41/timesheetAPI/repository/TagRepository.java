package com.seprojectgroup41.timesheetAPI.repository;

import com.seprojectgroup41.timesheetAPI.entity.Tag;
import com.seprojectgroup41.timesheetAPI.entity.TagType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {

    @Query("SELECT t FROM Tag t WHERE t.tagType = ?1")
    List<Tag> getAllTagsByType(TagType type);

    @Query("SELECT t from Tag t WHERE t.creatorId = ?1")
    List<Tag> getAllTagsByCreatorId(Long creator_id);

    @Query("SELECT t from Tag t WHERE t.tagType = ?1 AND t.creatorId = ?2")
    List<Tag> getAllTagsByTypeAndCreator(TagType type, Long creator_id);

}
