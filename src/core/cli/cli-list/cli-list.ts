import { CliBase, IPrompt } from "../cli-base";

class CliList extends CliBase {
	constructor() {
		super("list");
	}

	public prompt({ key, question, choices }: IPrompt): Promise<any> {
		return super.prompt({ key, question, choices });
	}
}

export { CliList };
