package com.trungnguyen.mellow.shared.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;


@RestControllerAdvice
public class ControllerExceptionHandler {
    private ErrorMessage buildErrorMessage(HttpStatus status, Exception ex, WebRequest request) {
        return new ErrorMessage(
                status.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
    }
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public ErrorMessage resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        return buildErrorMessage(HttpStatus.NOT_FOUND, ex, request);
    }

    @ExceptionHandler(UnauthorizedException.class)
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public ErrorMessage unauthorizedException(UnauthorizedException ex, WebRequest request) {
        return buildErrorMessage(HttpStatus.UNAUTHORIZED, ex, request);
    }

    @ExceptionHandler(ForbiddenException.class)
    @ResponseStatus(value = HttpStatus.FORBIDDEN)
    public ErrorMessage forbiddenException(ForbiddenException ex, WebRequest request) {
        return buildErrorMessage(HttpStatus.FORBIDDEN, ex, request);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorMessage globalExceptionHandler(Exception ex, WebRequest request) {
        return buildErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR, ex, request);
    }
}
