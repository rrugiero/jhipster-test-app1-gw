import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterTestApp1GwSharedModule } from 'app/shared/shared.module';

import { GatewayComponent } from './gateway.component';

import { gatewayRoute } from './gateway.route';

@NgModule({
  imports: [JhipsterTestApp1GwSharedModule, RouterModule.forChild([gatewayRoute])],
  declarations: [GatewayComponent]
})
export class GatewayModule {}
