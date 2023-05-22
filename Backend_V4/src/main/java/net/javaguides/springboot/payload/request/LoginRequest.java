package net.javaguides.springboot.payload.request;


import jakarta.validation.constraints.NotBlank;

public class LoginRequest {

    @NotBlank
    private String mail;

    @NotBlank
    private String password;

    public String getMail() {
        System.out.println("login :"+mail);
        return mail;
    }


    public String getPassword() {
        System.out.println("password :"+password);
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public void setMail(String mail) {
        this.mail = mail;
    }
}
