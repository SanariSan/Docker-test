import { CliBase, IPrompt } from "../cli-base";

class CliConfirm extends CliBase {
	constructor() {
		super("confirm");
	}

	//result value either true or false
	public prompt({ key, question }: IPrompt): Promise<any> {
		return super.prompt({ key, question });
	}
}

export { CliConfirm };
