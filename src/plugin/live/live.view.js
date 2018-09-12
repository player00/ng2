export class LiveView {
	constructor(model, context) {
		this.model = model;
		this.context = context;
	}

	get type() {
		return this.context.type;
	}

	get oldValue() {
		return this.context.oldValue;
	}

	get newValue() {
		return this.context.value;
	}

}
