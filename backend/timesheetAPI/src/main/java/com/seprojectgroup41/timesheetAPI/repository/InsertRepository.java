package com.seprojectgroup41.timesheetAPI.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
public class InsertRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void insertManagerAndConsultant(Long manager_id, Long consultant_id) {
        entityManager.createQuery("INSERT INTO UserManager (managerId, consultantId) VALUES (?1, ?2)")
                .setParameter(1, manager_id)
                .setParameter(2, consultant_id)
                .executeUpdate();
    }
}
