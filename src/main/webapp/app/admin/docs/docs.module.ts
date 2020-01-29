import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterTestApp1GwSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [JhipsterTestApp1GwSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
