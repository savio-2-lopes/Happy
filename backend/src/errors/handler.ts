import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface ValidationErrors {
	[key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
	if (error instanceof ValidationError) {
		const errors: ValidationErrors = {};

		error.inner.forEach(function (err) {
			errors[err.path] = err.errors;
		});

		return response.status(400).json({ errors, message: "Validation fails" });
	}

	console.error(error);

	return response.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
