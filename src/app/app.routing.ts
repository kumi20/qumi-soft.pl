import { RouterModule, Routes, CanActivate, RouterLinkActive} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// ROUTING
const routesConfig: Routes = [
    { path: '', component: DashboardComponent},
    { path: ':id', component: DashboardComponent}
  ]

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: true,
})