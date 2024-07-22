package com.backend.portfolio.backend_portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.portfolio.backend_portfolio.models.ContactForm;
import com.backend.portfolio.backend_portfolio.services.emailService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "https://porfolio-santiago-varela.netlify.app")
public class contactController {

    @Value("${spring.mail.username}")
    private String mailUsername;

    @Autowired
    private emailService emailService;

    @PostMapping
    public ResponseEntity<Void> sendContactMail(@RequestBody ContactForm contactForm) {
        String to = "santiago.varela@hotmail.com";
        String subject = "Nuevo mensaje de contacto";
        String text = "Nombre: " + contactForm.getNombre() + "\n" +
                "Empresa: " + contactForm.getEmpresa() + "\n" +
                "Email: " + contactForm.getEmail() + "\n" +
                "Mensaje: " + contactForm.getMensaje();

        emailService.sendSimpleMessage(to, subject, text);

        String confirmationSubject = "Confirmación de recepción de mensaje";
        String confirmationText = "Hola " + contactForm.getNombre() + ",\n\n" +
                "¡Qué gusto que te hayas puesto en contacto conmigo! Recibí tu mensaje y en breve me comunicaré contigo.\n\n"
                +
                "Saludos cordiales,\nSantiago Varela";
        emailService.sendSimpleMessage(contactForm.getEmail(), confirmationSubject, confirmationText);

        return ResponseEntity.ok().build();
    }
}