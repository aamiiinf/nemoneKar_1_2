import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';

import { PageAsliComponent } from './routes/page-asli/page-asli.component';
import { SingInComponent } from './routes/rigester/sing-in/sing-in.component';
import { SingUpComponent } from './routes/rigester/sing-up/sing-up.component';

const appRoutes: Routes = [
  { path: 'main', component: PageAsliComponent},
  { path: 'AdminPanel', component: AdminPanelComponent },
  { path: 'sing-up', component: SingUpComponent },
  { path: 'sing-in', component: SingInComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
