import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ResidentialComponent } from './pages/residential/residential';
import { CommercialComponent } from './pages/commercial/commercial';
import { Customized } from './pages/customized/customized';
import { HeroSectionComponent } from './pages/maintenance/components/hero-section/hero-section';
import { Maintenance } from './pages/maintenance/maintenance';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';
import { AccountDeletionComponent } from './pages/acount-deletion/acount-deletion';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'residential',
    component: ResidentialComponent
  },
  {
    path: 'commercial',
    component: CommercialComponent
  },
  {
    path: 'maintenance',
    component: Maintenance
  },
  {
    path: 'customized',
    component: Customized
  },
   {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'account-deletion',
    component: AccountDeletionComponent
  }


];