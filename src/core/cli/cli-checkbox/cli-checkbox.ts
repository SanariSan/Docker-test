import { CliBase, IPrompt } from "../cli-base";

class CliCheckbox extends CliBase {
	constructor() {
		super("checkbox");
	}

	private validate(value) {
		if (value.length < 1) return "You must choose at least one option";
		return true;
	}

	public prompt({ key, question, choices, validate }: IPrompt): Promise<any> {
		return super.prompt({ key, question, choices, validate: validate || this.validate });
	}
}

export { CliCheckbox };
