package com.example.demo.control;

import com.example.demo.util.ResultUtil;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;

@RestController
//@EnableAutoConfiguration
public class LoginControl {
    @ResponseBody
    @RequestMapping("login")
    public ResultUtil Login(){
        ResultUtil resultUtil = new ResultUtil();
        resultUtil.setDatas(new ArrayList<>());
//        ModelAndView modelAndView = new ModelAndView();/
//        modelAndView.setViewName("index");
        return resultUtil;
    }
}
