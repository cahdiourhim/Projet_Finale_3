package net.javaguides.springboot.security.jwt;

import java.util.Date;

import net.javaguides.springboot.security.services.UtilisateurImpl;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.*;

import javax.crypto.SecretKey;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${agora.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    @Value("${agora.app.jwtSecret}")
    private String jwtSecret;

    public String generateJwtToken(Authentication authentication) {

        UtilisateurImpl userPrincipal = (UtilisateurImpl) authentication.getPrincipal();

        // Generate a secure key for HS512 algorithm
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

        return Jwts.builder().setSubject((userPrincipal.getMail())).setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs)).signWith(secretKey)
                .compact();
    }

    public String getMailFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Signature JWT invalide : {}", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.error("Jeton JWT invalide: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("Jeton JWT expire: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("Jeton JWT non supporte: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }
}