import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { SplitListPipe } from './pipes/split-list.pipe';
import { SearchBarComponent  } from './components/search-bar/search-bar.component';
import { ItemsFoundComponent  } from './components/items-found/items-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PagerService } from './services/pagination.service';
const COMPONENTS = [ SearchBarComponent,
                    ItemsFoundComponent,
                    PaginationComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PagerService, SplitListPipe],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class GenericListModule { }
