package com.backend.portfolio.backend_portfolio.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.portfolio.backend_portfolio.models.Answer;
import com.backend.portfolio.backend_portfolio.models.question;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://porfolio-santiago-varela.netlify.app")
public class chatbotController {

    @PostMapping("/chatbot")
    public Answer respuesta(@RequestBody question question) {
        String quest = question.getQuestion().toLowerCase();
        String respuesta = "";
        switch (quest) {
            case "¿qué tecnología te apasiona?":
                respuesta = "Me apasiona todo lo relacionado con el back-end, especialmente Java.";
                break;
            case "¿tienes experiencia laboral?":
                respuesta = "No en el sector IT, pero tengo mucha experiencia con proyectos personales y académicos. ¡Siempre hay un comienzo!";
                break;
            case "¿por qué debo elegirte?":
                respuesta = "Soy una persona comprometida, con ambición de crecer y aportar valor a todo lo que hago. Sin importar la dificultad, amo los retos y superarme.";
                break;
        }

        return new Answer(respuesta);
    }
}
