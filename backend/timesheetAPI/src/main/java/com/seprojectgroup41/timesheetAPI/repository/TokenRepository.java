package com.seprojectgroup41.timesheetAPI.repository;

import com.seprojectgroup41.timesheetAPI.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {


    @Query("""
select t from Token t inner join Employee e on t.employee.id = e.id
where t.employee.id = :employeeId and t.loggedOut = false
""")
    List<Token> findAllTokensByUser(Long employeeId);

    @Query("""
select t from Token t inner join Employee e on t.employee.id = e.id
where t.employee.id = :employeeId
""")
    List<Token> findAllTokensByUserLoggedOutTrue(Long employeeId);

    Optional<Token> findByToken(String token);
}