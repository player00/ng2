import { NgModule } from '@angular/core';
import { TemplateModule } from '../../template/template.module';
import { LiveComponent } from './live.component';

@NgModule({
	declarations: [
		LiveComponent
	],
	exports: [
		LiveComponent
	],
	imports: [
		TemplateModule
	]
})
export class LiveModule {
}
