package net.javaguides.springboot.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import net.javaguides.springboot.model.UtilisateurType;
import net.javaguides.springboot.repository.TypeUtilisateurRepository;
import net.javaguides.springboot.repository.UtilisateurRepository;
import net.javaguides.springboot.repository.UtilisateurTypeRepository;
import net.javaguides.springboot.security.jwt.JwtUtils;
import net.javaguides.springboot.security.services.UtilisateurImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.IType;
import net.javaguides.springboot.model.TypeUtilisateur;
import net.javaguides.springboot.model.Utilisateur;
import net.javaguides.springboot.payload.request.LoginRequest;
import net.javaguides.springboot.payload.request.SignUpRequest;
import net.javaguides.springboot.payload.response.JwtResponse;
import net.javaguides.springboot.payload.response.MessageResponse;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthentificationController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UtilisateurRepository userRepository;

    @Autowired
    TypeUtilisateurRepository typeRepository;

    @Autowired
    UtilisateurTypeRepository utilisateurTypeRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        System.out.println("SignIn Login : "+loginRequest.getMail()+ "Password : "+loginRequest.getPassword());

        // Vérifier si le compte correspondant au login existe dans la base de données
        Utilisateur user = userRepository.findByMail(loginRequest.getMail())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        Authentication authentication = null;

        String mail = loginRequest.getMail();
        String psword = loginRequest.getPassword();

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(mail, psword);

        authentication=authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        UtilisateurImpl userDetails = (UtilisateurImpl) authentication.getPrincipal();
        System.out.println("Num : " + userDetails.getNumTelephone());
        System.out.println("Nom : " + userDetails.getNomUtilisateur());
        List<String> types = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        System.out.println("types : " + types);

        JwtResponse jwtResponse = new JwtResponse(jwt,
                userDetails.getNum(),
                userDetails.getMail(),
                userDetails.getNumTelephone(),
                userDetails.getNomUtilisateur(),
                userDetails.getAdresseUtilisateur(),
                userDetails.getVille(),
                types);

        return ResponseEntity.ok(jwtResponse);
    }


    @PostMapping("/signup")
    @Transactional
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {

        if (userRepository.existsByMail(signUpRequest.getMail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Erreur : Le mail est deja utilise");
        }

        // Create new user's account
        Utilisateur user = new Utilisateur(signUpRequest.getNumTelephone(),
                signUpRequest.getNomUtilisateur(),signUpRequest.getMail(),
                signUpRequest.getAdresseUtilisateur(), signUpRequest.getVille(),signUpRequest.getMail(),
                encoder.encode(signUpRequest.getPsw()), signUpRequest.isCivilite()
        );

        userRepository.save(user);

        // Enregistrement des types d'utilisateurs
        Set<String> strTypes = signUpRequest.getTypes();
        Set<TypeUtilisateur> types = new HashSet<>();

        if (strTypes == null) {
            TypeUtilisateur type = typeRepository.findByName(IType.client)
                    .orElseThrow(() -> new RuntimeException("Erreur : Le role n'a pas ete trouve"));
            types.add(type);
        } else {
            strTypes.forEach(type -> {
                switch (type) {
                    case "administrateur":
                        TypeUtilisateur adminRole = typeRepository.findByName(IType.administrateur)
                                .orElseThrow(() -> new RuntimeException("Erreur : Le role n'a pas ete trouve."));
                        types.add(adminRole);

                        break;
                    case "vendeur":
                        TypeUtilisateur vendeurRole = typeRepository.findByName(IType.vendeur)
                                .orElseThrow(() -> new RuntimeException("Erreur : Le role n'a pas ete trouve."));
                        types.add(vendeurRole);

                        break;
                    default:
                        TypeUtilisateur clientRole = typeRepository.findByName(IType.client)
                                .orElseThrow(() -> new RuntimeException("Erreur : Le role n'a pas ete trouve."));
                        types.add(clientRole);
                }
            });
        }

        for (TypeUtilisateur type : types) {
            UtilisateurType utilisateurType = new UtilisateurType(user, type);
            utilisateurTypeRepository.save(utilisateurType);
        }

        return ResponseEntity.ok(new MessageResponse("L'utilisateur a bien ete enregistre"));
    }


}
