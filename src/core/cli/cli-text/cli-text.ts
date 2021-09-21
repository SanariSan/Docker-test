import { CliBase, IPrompt } from "../cli-base";

class CliText extends CliBase {
	constructor() {
		super("input");
	}

	public prompt({ key, question, defaultAnswer, validate }: IPrompt): Promise<any> {
		return super.prompt({ key, question, defaultAnswer, validate: validate });
	}
}

export { CliText };
