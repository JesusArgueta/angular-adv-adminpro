import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PageComponent,
    children: [
      { path: '', component: DashboardComponent, data:{titulo:'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data:{titulo:'Progress'} },
      { path: 'grafica1', component: Grafica1Component, data:{titulo:'Grafica1'} },
      { path: 'account-settings', component: AccountSettingComponent, data:{titulo:'Account Settings'} },
      { path: 'promesas', component: PromesasComponent, data:{titulo:'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data:{titulo:'RxJs'} },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
