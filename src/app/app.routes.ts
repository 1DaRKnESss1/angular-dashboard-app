import { Routes } from '@angular/router';
// ШЛЯХИ ОНОВЛЕНО: прибрано .component
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AccountComponent } from './pages/account/account';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'accounts', component: AccountComponent }
];