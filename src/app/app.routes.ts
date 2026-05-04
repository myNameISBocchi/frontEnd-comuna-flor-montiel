import { Routes } from '@angular/router';
import { Login } from './components/login/login'; 
import { ListComunity } from './components/list-comunity/list-comunity';
import { Home } from './components/home/home';
import { PersonList } from './components/person-list/person-list';
import { authGuard } from './guards/auth.guards';
import { PersonForm } from './components/person-form/person-form';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'home', component: Home, canActivate: [authGuard] },
    { path: 'person', component: PersonList, canActivate: [authGuard] },
    { path: 'personForm', component:PersonForm, canActivate:[authGuard]},
    { path: 'comunity', component: ListComunity, canActivate: [authGuard] },
    
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];