package com.example.demo.Filter;

import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 全局异常处理器
 * Created by Raye on 2019-04-15
 */
//@ControllerAdvice
public class ExceptionControllerAdvice {

//    @ExceptionHandler(BindException.class)
//    @ResponseBody
//    public String bindExceptionHandler(BindException ex){
//        System.out.println(ex.getMessage());
//        if(ex.hasErrors()){
//            List<FieldError> list = ex.getFieldErrors();
//            StringBuffer sb = new StringBuffer("参数：");
//            for(FieldError error : list){
//                sb.append(error.getField()).append(",");
//            }
//            sb.append("不符合要求");
//            return sb.toString();
//        }
//        return ex.getMessage();
//    }
}

