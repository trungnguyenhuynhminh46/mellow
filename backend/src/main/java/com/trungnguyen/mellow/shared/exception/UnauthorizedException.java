package com.trungnguyen.mellow.shared.exception;

import java.io.Serial;

public class UnauthorizedException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 0L;

    public UnauthorizedException(String msg) {
        super(msg);
    }
}
