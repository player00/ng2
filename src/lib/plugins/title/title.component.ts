import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PluginService } from '../plugin.service';

// @deprecated
@Component({
	selector: 'q-grid-title',
	templateUrl: './title.component.html',
	providers: [PluginService],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
	context: { $implicit: TitleComponent } = {
		$implicit: this
	};

	constructor(private plugin: PluginService) {
	}

	public get value() {
		return this.plugin.model.grid().title;
	}
}
