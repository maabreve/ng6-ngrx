import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent, LogoComponent } from '.';

const COMPONENTS = [
  HeaderComponent,
    FooterComponent,
    LogoComponent ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class LayoutModule { }
