import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterTestApp1GwSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [JhipsterTestApp1GwSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
