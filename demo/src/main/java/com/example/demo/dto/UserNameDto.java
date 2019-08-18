package com.example.demo.dto;

public class UserNameDto {
    public String usrename ;
    public String password ;

    @Override
    public String toString() {
        return "UserNameDto{" +
                "usrename='" + usrename + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public String getUsrtname() {
        return usrename;
    }

    public void setUsrtname(String usrename) {
        this.usrename = usrename;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
