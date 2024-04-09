package com.trungnguyen.mellow.shared.exception;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ErrorMessage {
    private int statusCode;
    private Date timestamp;
    private String message;
    private String description;

    public ErrorMessage(Throwable ex, int statusCode) {
        this.timestamp = new Date();
        this.message = ex.getLocalizedMessage();
        this.description = ex.getMessage();
        this.statusCode = statusCode;
    }
}
