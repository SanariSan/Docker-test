import { GenericError, ERROR_ORIGIN } from "../";

class ExternalError extends GenericError {
	constructor(ERROR_TYPE, ERROR_DESCRIPTION, ERROR_MESAGE) {
		super(ERROR_TYPE, ERROR_ORIGIN.EXTERNAL, ERROR_DESCRIPTION, ERROR_MESAGE);
	}
}

export { ExternalError };
