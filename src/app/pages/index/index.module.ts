import { NgModule } from '@angular/core';
import { Index } from './index';
import { CommonModule } from '@angular/common';

// Add only non-lazy references here.
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Index,
  ],
  exports: [Index],
})
export class IndexModule { }
