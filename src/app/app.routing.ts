import { RouterModule, Routes, CanActivate, RouterLinkActive} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EbookComponent } from './ebook/ebook.component';

import { AuthGuard } from './auth.guard';

// ROUTING
const routesConfig: Routes = [
    { path: '', component: DashboardComponent},    
    { path: 'ebook', component: EbookComponent, canActivate: [AuthGuard]},
    { path: ':id', component: DashboardComponent}
  ]

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: true,
})