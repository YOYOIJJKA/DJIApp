import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from './Pages/auth/auth.component';
import { MainComponent } from './Pages/main/main.component';
import { SceneComponent } from './Pages/scene/scene.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, MainComponent, SceneComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
