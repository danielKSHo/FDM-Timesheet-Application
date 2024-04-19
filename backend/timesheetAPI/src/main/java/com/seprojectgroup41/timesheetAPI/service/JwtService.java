package com.seprojectgroup41.timesheetAPI.service;

import com.seprojectgroup41.timesheetAPI.entity.Employee;
import com.seprojectgroup41.timesheetAPI.repository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@AllArgsConstructor
@Service
public class JwtService {

    private TokenRepository tokenRepository;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean isValid(String token, Employee employee) {
        String username = extractUsername(token);

        boolean validToken = tokenRepository
                .findByToken(token)
                .map(t -> !t.isLoggedOut())
                .orElse(false);

        return (username.equals(employee.getUsername())) && !isTokenExpired(token) && validToken;
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String generateToken(Employee employee) {

        return Jwts
                .builder()
                .subject(employee.getUsername())
                .claim("id", employee.getEmpId().toString())
                .claim("role", employee.getRole())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 24*60*60*1000))
                .signWith(getSigninKey())
                .compact();
    }

    private SecretKey getSigninKey() {
        String SECRET_KEY = "d3c0de4ec61d134f231c50723fc320bc90ddacb4964c11b571a6e6b704e6af2a";
        byte[] keyBytes = Decoders.BASE64URL.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}
