import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { ProbandoComponent } from './pages/probando/probando.component';
import { CounterPageComponent } from './pages/counter/counter.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonballSuper/dragonball-super-page.component';

export const routes: Routes = [

 {
    path: '',
    component:CounterPageComponent
  },

  {
    path: 'probando',
    component: ProbandoComponent
  },

  {
    path: 'hero',
     component: HeroPageComponent
  },
  {
    path:'dragonball',
    component: DragonballPageComponent
  },
  {
    path:'dragonball-super',
    component: DragonballSuperPageComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];

