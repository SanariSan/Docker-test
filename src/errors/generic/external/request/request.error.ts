import { ERROR_TYPE, ExternalError } from "../";

class RequestError extends ExternalError {
	constructor(ERROR_MESAGE: string) {
		const ERROR_DESCRIPTION = "Sample request related error";

		super(ERROR_TYPE.REQUEST, ERROR_DESCRIPTION, ERROR_MESAGE);
	}
}

export { RequestError };
