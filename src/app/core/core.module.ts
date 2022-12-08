import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { MainSpaceComponent } from './components/main-space/main-space.component';
import { FlexModule } from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import {  MatSidenavModule  } from '@angular/material/sidenav';
import {  MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ToolBarComponent,
    LeftNavComponent,
    MainSpaceComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    GridModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    ToolBarComponent,
    LeftNavComponent,
    MainSpaceComponent,
    FooterComponent
  ]
})
export class CoreModule { }
