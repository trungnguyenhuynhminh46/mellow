package com.trungnguyen.mellow.shared.exception;

import java.io.Serial;

public class ForbiddenException extends RuntimeException {
    @Serial
    private static final long serialVersionUID = 0L;

    public ForbiddenException(String message) {
        super(message);
    }
}
