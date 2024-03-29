import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent} from './contact/contact.component'
const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'login', component:LoginComponent , pathMatch:'full' },
  { path: 'reset', component:PasswordResetComponent , pathMatch:'full' },
  { path: 'contact', component:ContactComponent , pathMatch:'full' },
  { path: 'policy/privacy', component:PrivacyComponent , pathMatch:'full' },
  { path: 'policy/terms', component:TermsComponent , pathMatch:'full' },
  { path: '**', component:PagenotfoundComponent , pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
