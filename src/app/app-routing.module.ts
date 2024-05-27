import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Pages/auth/auth.component';
import { SceneComponent } from './Pages/scene/scene.component';
import { MainComponent } from './Pages/main/main.component';
import { TestsComponent } from './Pages/tests/tests.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'scene',
    component: SceneComponent,
  },
  {
    path: 'main-page',
    component: MainComponent,
  },
  {
    path: 'tests',
    component: TestsComponent,
  },
  {
    path: 'scene-repair',
    component: SceneComponent
  },
  {
    path: 'assemble',
    component: SceneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
