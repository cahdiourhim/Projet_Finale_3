package net.javaguides.springboot.controller;

import jakarta.mail.MessagingException;
import net.javaguides.springboot.model.Utilisateur;
import net.javaguides.springboot.payload.request.ProduitCommande;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.MessagingException;
import java.util.List;

@Service
public class EmailService {

    private final TemplateEngine templateEngine;

    private final JavaMailSender javaMailSender;

    public EmailService(TemplateEngine templateEngine, JavaMailSender javaMailSender) {
        this.templateEngine = templateEngine;
        this.javaMailSender = javaMailSender;
    }

    public String sendMail(Utilisateur user, List<ProduitCommande> produitCommandes, double totale) throws MessagingException {
        Context context = new Context();
        context.setVariable("user", user);
        context.setVariable("totale", totale);
        context.setVariable("produits", produitCommandes);

        String process = templateEngine.process("commande", context);
        jakarta.mail.internet.MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
        helper.setSubject("Votre command AGORA ");
        helper.setText(process, true);
        helper.setTo(user.getMail());
        javaMailSender.send(mimeMessage);
        return "Sent";
    }
}
