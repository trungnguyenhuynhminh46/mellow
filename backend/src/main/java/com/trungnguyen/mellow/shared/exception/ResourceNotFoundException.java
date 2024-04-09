package com.trungnguyen.mellow.shared.exception;

import java.io.Serial;

public class ResourceNotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 0L;

    public ResourceNotFoundException(String msg) {
        super(msg);
    }
}
