package net.javaguides.springboot.security.services;

import net.javaguides.springboot.model.TypeUtilisateur;
import net.javaguides.springboot.repository.TypeUtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.springboot.model.Utilisateur;
import net.javaguides.springboot.repository.UtilisateurRepository;

import java.util.HashSet;
import java.util.Set;


@Service
public class UtilisateurServiceImpl implements UserDetailsService {
    @Autowired
    UtilisateurRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        System.out.println("loadUserbyUserName");
        Utilisateur user = userRepository.findByMail(mail)
                .orElseThrow(() -> new UsernameNotFoundException("L'utilisateur avec le pseudo " + mail + "n'a pas ete trouve"));

        return UtilisateurImpl.build(user);
    }

}
