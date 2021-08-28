import { GenericError, ERROR_ORIGIN } from "../";

class InternalError extends GenericError {
	constructor(ERROR_TYPE, ERROR_DESCRIPTION, ERROR_MESAGE) {
		super(ERROR_TYPE, ERROR_ORIGIN.INTERNAL, ERROR_DESCRIPTION, ERROR_MESAGE);
	}
}

export { InternalError };
