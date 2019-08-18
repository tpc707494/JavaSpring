package com.example.demo.entity;

import lombok.Data;

@Data
public class TpcUser {
    public Integer id;
    public String usrename ;
    public String password ;

    @Override
    public String toString() {
        return "TpcUser{" +
                "id=" + id +
                ", usrename='" + usrename + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
