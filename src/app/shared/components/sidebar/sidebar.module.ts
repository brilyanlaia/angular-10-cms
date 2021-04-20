import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, CollapseModule.forRoot(), RouterModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
