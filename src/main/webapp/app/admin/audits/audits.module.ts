import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterTestApp1GwSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JhipsterTestApp1GwSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
