import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LiveView } from 'ng2-qgrid/plugin/live/live.view';
import { PluginService } from '../plugin.service';
import { TemplateHostService } from '../../template/template-host.service';

@Component({
	selector: 'q-grid-live',
	templateUrl: './live.component.html',
	providers: [TemplateHostService, PluginService]
})

export class LiveComponent implements OnInit {
	@Input() type: string;
	@Input() value: any;
	@Input() oldValue: any;
	@Output() exit = new EventEmitter();
	@Output() enter = new EventEmitter();

	context: { $implicit: LiveView };

	constructor(
		private plugin: PluginService,
		private templateHost: TemplateHostService
	) {
		this.templateHost.key = () => `live`;
	}

	ngOnInit() {
		const { model } = this.plugin;
		const view = new LiveView(model, this);
		this.context = { $implicit: view };

		setTimeout(() => {
			this.exit.emit();
		}, 1000);
	}
}
