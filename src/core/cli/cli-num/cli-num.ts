import { CliBase, IPrompt } from "../cli-base";

class CliNum extends CliBase {
	constructor() {
		super("number");
	}

	//if not number entered - value empty string
	private validate(value) {
		if (isNaN(parseFloat(value)) || !isFinite(value)) return "Enter correct number (12.345)";
		return true;
	}

	public prompt({ key, question, defaultAnswer, validate }: IPrompt): Promise<any> {
		return super.prompt({ key, question, defaultAnswer, validate: validate || this.validate });
	}
}

export { CliNum };
