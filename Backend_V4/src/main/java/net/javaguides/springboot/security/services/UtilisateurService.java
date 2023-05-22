package net.javaguides.springboot.security.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UtilisateurService {
    UserDetails loadUserByUsername(String login) throws UsernameNotFoundException;

}
