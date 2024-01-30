package com.codefamily.backendmarketplace.exception;

import com.codefamily.backendmarketplace.dto.UserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.net.UnknownServiceException;
import java.text.SimpleDateFormat;
import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler({UserNotFoundException.class})
    public ResponseEntity<UserException> handleStudentNotFoundException(UserNotFoundException exception) {

        UserException userException=new UserException(HttpStatus.NOT_FOUND.value(), exception.getMessage(),
                new SimpleDateFormat().format(new Date()));

        return new ResponseEntity<>(userException,HttpStatus.NOT_FOUND);

//        return ResponseEntity
//                .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body(exception.getMessage());
    }
//    @ExceptionHandler({StudentAlreadyExistsException.class})
//    public ResponseEntity<Object> handleStudentAlreadyExistsException(StudentAlreadyExistsException exception) {
//        return ResponseEntity
//                .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body(exception.getMessage());
//    }
//    @ExceptionHandler({RuntimeException.class})
//    public ResponseEntity<UserException> handleRuntimeException(RuntimeException exception) {
//        UserException u
//
//        return ResponseEntity
//                .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body(exception.getMessage());
//    }
}