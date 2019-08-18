package com.example.demo.service;



import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.TpcUser;

import java.util.List;

public interface UserSerivce extends IService<TpcUser> {
    List<TpcUser> getUserList(Long id);
}
