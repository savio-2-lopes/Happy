import { ErrorRequestHandler } from 'express';
import {ValidationError} from 'yup';

interface ValidationErrors{
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if(error instanceof ValidationError) {
        let errors: ValidationErrors = {};
        
    error.inner.forEach (err => { 
        errors[err.path] = err.errors;
    });
400
    return response.status(500).json({ message: 'Validations fails', errors})
    
}

    console.log(error);

    return response.status(500).json({ message: 'Internal server Error'})
};

export default errorHandler;