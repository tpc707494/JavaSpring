package com.example.demo.control;

import com.example.demo.dto.UserNameDto;
import com.example.demo.entity.TpcUser;
import com.example.demo.service.UserSerivce;
import com.example.demo.util.ResultUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "用户的增删改查")
public class LoginControl extends BaseControl{

    @Autowired
    private UserSerivce userSerivce;
    ResultUtil resultUtil = new ResultUtil();

    @ApiOperation(value="获取用户列表", notes="获取用户列表")
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResultUtil Login(@RequestBody UserNameDto userNameDto){
        resultUtil.setDatas(userNameDto);
        System.out.println(userNameDto.toString());
        List<TpcUser> userNameDto1 = userSerivce.getUserList(Long.parseLong("0"));
        System.out.println(userNameDto1.toString());
        return resultUtil;
    }

    @ApiOperation(value="创建用户", notes="根据User对象创建用户")
    @RequestMapping(value = "login", method = RequestMethod.GET)
    public ResultUtil addUser1(String usrtname, String password) {
        System.out.println("username is:"+usrtname);
        System.out.println("password is:"+password);
        List<TpcUser> userNameDto1 = userSerivce.getUserList(Long.parseLong("0"));
        resultUtil.setDatas(userNameDto1);
        System.out.println(userNameDto1.toString());
        return resultUtil;
    }
}
