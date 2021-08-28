import { ERROR_ORIGIN, ERROR_TYPE } from "./generic.type";

class GenericError extends Error {
	protected ERROR_DESCRIPTION: string;
	protected ERROR_ORIGIN: ERROR_ORIGIN;
	protected ERROR_MESAGE: string;
	protected ERROR_TIMESTAMP: number;
	protected ERROR_TIMESTAMP_HR: Date;

	constructor(
		ERROR_TYPE: ERROR_TYPE,
		ERROR_ORIGIN: ERROR_ORIGIN,
		ERROR_DESCRIPTION,
		ERROR_MESAGE,
	) {
		super(ERROR_TYPE);

		this.ERROR_ORIGIN = ERROR_ORIGIN;
		this.ERROR_DESCRIPTION = ERROR_DESCRIPTION;
		this.ERROR_MESAGE = ERROR_MESAGE;

		this.ERROR_TIMESTAMP_HR = new Date();
		this.ERROR_TIMESTAMP = this.ERROR_TIMESTAMP_HR.getTime();
	}
}

export { GenericError };
