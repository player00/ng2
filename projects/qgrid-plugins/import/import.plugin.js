import { upload } from '@qgrid/core/services/upload';
import { readFile } from './read';

export class ImportPlugin {
	constructor(model, context) {
		this.model = model;
		this.context = context;
	}

	upload() {
		const { element } = this.context;
		upload(element);
	}

	load(e) {
		const { files } = e.target;
		for (let file of files) {
			const reader = new FileReader();
			reader.onload = e => readFile(e, file, this.model, this.options);
			reader.readAsBinaryString(file);
		}
	}
}
