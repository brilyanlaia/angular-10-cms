import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { SidebarModule } from '@shared/components/sidebar/sidebar.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [MemberComponent],
  imports: [CommonModule, BsDropdownModule.forRoot(), RouterModule.forChild(routes), SidebarModule],
})
export class MemberModule {}
