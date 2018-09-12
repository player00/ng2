import { Model } from 'ng2-qgrid/core/infrastructure/model';

export declare class LiveView {
	constructor(model: Model, context: any);

	context: any;
	model: { [ key: string ]: any };
	readonly type: string;
}
