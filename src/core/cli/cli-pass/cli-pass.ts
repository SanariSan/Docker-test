import { CliBase, IPrompt } from "../cli-base";

class CliPass extends CliBase {
	constructor() {
		super("password");
	}

	private validate(value: string) {
		if (value.length < 6 || value.length > 24 || !/^[A-Za-z0-9!@#$%^&*_-]+$/.test(value))
			return "Enter valid password (6-24 chars [A-Za-z0-9!@#$%^&*_-])";
		return true;
	}

	public prompt({ key, question, defaultAnswer, validate }: IPrompt): Promise<any> {
		return super.prompt({
			key,
			question,
			defaultAnswer,
			validate: validate || this.validate,
			rest: { mask: "*" },
		});
	}
}

export { CliPass };
