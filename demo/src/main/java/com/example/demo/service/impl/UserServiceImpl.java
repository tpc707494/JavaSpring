package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.dao.UserMapper;
import com.example.demo.dto.UserNameDto;
import com.example.demo.entity.TpcUser;
import com.example.demo.service.UserSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 *
 **/
@Service("userService")
public class UserServiceImpl extends ServiceImpl<UserMapper, TpcUser> implements UserSerivce {

    @Autowired
    private UserMapper userMapper;

    @Override
    @Cacheable(value = "getUserList")
    @Transactional(propagation = Propagation.REQUIRED)
    public List<TpcUser> getUserList(Long id) {
        return userMapper.getUserList(id);
    }
}
