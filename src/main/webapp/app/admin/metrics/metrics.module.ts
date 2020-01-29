import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterTestApp1GwSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [JhipsterTestApp1GwSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}
