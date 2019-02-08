import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayerService } from './layer.service';

@Component({
	selector: 'q-grid-core-layer',
	templateUrl: './layer-core.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerCoreComponent {
	constructor(private layerService: LayerService) {
	}

	get isActive() {
		return this.layerService.count > 0;
	}
}
