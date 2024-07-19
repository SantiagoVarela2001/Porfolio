package com.backend.portfolio.backend_portfolio.models;

public class ContactForm {

    private String nombre;
    private String empresa;
    private String email;
    private String mensaje;
    
    public ContactForm(String nombre, String empresa, String email, String mensaje) {
        this.nombre = nombre;
        this.empresa = empresa;
        this.email = email;
        this.mensaje = mensaje;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    @Override
    public String toString() {
        return "ContactForm [nombre=" + nombre + ", empresa=" + empresa + ", email=" + email + ", mensaje=" + mensaje
                + "]";
    }

    
}
