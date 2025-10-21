import { Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { AuthGuard } from './auth.guard-guard';
import { ProfileComponent } from './profile.component/profile.component';
import { RegisterComponent } from './register.component/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];
