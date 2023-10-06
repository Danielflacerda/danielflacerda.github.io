import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StackcarouselComponent } from './components/stackcarousel/stackcarousel.component';

@NgModule({
  imports: [CommonModule],
  exports: [StackcarouselComponent],
  declarations: [StackcarouselComponent],
})
export class StackcarouselModule {}
