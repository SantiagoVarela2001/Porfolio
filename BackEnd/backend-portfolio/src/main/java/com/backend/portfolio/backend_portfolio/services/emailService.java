package com.backend.portfolio.backend_portfolio.services;

import com.backend.portfolio.backend_portfolio.models.ContactForm;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class emailService {
    
    @Value("${SENDGRID_API_KEY}")
    private String apiKey;

    public void sendSimpleMessage(String to, String subject, String text, ContactForm contactForm) {
    // Enviar el correo al destinatario (usando santiago.varela@hotmail.com como "from")
    Email fromRecipient = new Email("santiago.varela@hotmail.com");  // Este es el correo desde el cual se envía al destinatario
    Email toEmailRecipient = new Email(to);  // Dirección del destinatario
    Content contentRecipient = new Content("text/html", text);
    Mail mailToRecipient = new Mail(fromRecipient, subject, toEmailRecipient, contentRecipient);

    // Enviar el correo a ti mismo (usando santiago.vrl.12@gmail.com como "from")
    Email fromSelf = new Email("santiago.vrl.12@gmail.com");  // Este es el correo desde el cual se enviará a ti
    Email toEmailSelf = new Email("santiago.varela@hotmail.com");  // Tu dirección de correo
    
    // Aquí cambiamos el contenido para incluir los datos del contactForm
    String textSelf = "Te ha contactado " + contactForm.getNombre() + " de la empresa " + contactForm.getEmpresa() + 
                      ". Su email es: " + contactForm.getEmail() + ".\n\nMensaje: " + contactForm.getMensaje();
    Content contentSelf = new Content("text/html", textSelf);
    Mail mailToSelf = new Mail(fromSelf, subject, toEmailSelf, contentSelf);

    // Configuración de SendGrid
    SendGrid sg = new SendGrid(apiKey);
    Request request = new Request();

    try {
        // Enviar correo al destinatario
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mailToRecipient.build());
        Response responseRecipient = sg.api(request);
        System.out.println("Respuesta al destinatario: " + responseRecipient.getStatusCode());
        System.out.println(responseRecipient.getBody());
        System.out.println(responseRecipient.getHeaders());

        // Enviar correo a ti
        request.setBody(mailToSelf.build());
        Response responseSelf = sg.api(request);
        System.out.println("Respuesta a ti: " + responseSelf.getStatusCode());
        System.out.println(responseSelf.getBody());
        System.out.println(responseSelf.getHeaders());

    } catch (IOException e) {
        e.printStackTrace();
    }
}

}
