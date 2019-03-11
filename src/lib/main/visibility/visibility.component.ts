import { Component, Input, OnChanges } from '@angular/core';
import { RootService } from 'lib/infrastructure/component/root.service';

@Component({
	selector: 'q-grid-visibility',
	template: ''
})
export class VisibilityComponent implements OnChanges {
	@Input() head = true;
	@Input() foot = true;
	@Input() body = true;
	@Input() toolbarTop = true;
	@Input() toolbarBottom = true;
	@Input() toolbarRight = false;
	@Input() toolbarLeft = false;

	@Input() pinLeft = false;
	@Input() pinTop = false;
	@Input() pinRight = false;
	@Input() pinBottom = false;

	constructor(private root: RootService) {
	}

	ngOnChanges() {
		const { model } = this.root;
		model.visibility({
			body: this.body,
			foot: this.foot,
			head: this.head,
			toolbar: {
				bottom: this.toolbarBottom,
				left: this.toolbarLeft,
				right: this.toolbarRight,
				top: this.toolbarTop,
			},
			pin: {
				bottom: this.pinBottom,
				left: this.pinLeft,
				right: this.pinRight,
				top: this.pinTop,
			},
		});
	}
}
