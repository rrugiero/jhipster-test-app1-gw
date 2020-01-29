import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterTestApp1GwSharedModule } from 'app/shared/shared.module';
import { JhipsterTestApp1GwCoreModule } from 'app/core/core.module';
import { JhipsterTestApp1GwAppRoutingModule } from './app-routing.module';
import { JhipsterTestApp1GwHomeModule } from './home/home.module';
import { JhipsterTestApp1GwEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterTestApp1GwSharedModule,
    JhipsterTestApp1GwCoreModule,
    JhipsterTestApp1GwHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterTestApp1GwEntityModule,
    JhipsterTestApp1GwAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterTestApp1GwAppModule {}
