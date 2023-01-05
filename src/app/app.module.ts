import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewImageComponent } from './preview-image/preview-image.component';
import { HttpClientModule } from '@angular/common/http';
import { DogListsComponent } from './dog-lists/dog-lists.component';
import { AllDogsComponent } from './dog-lists/all-dogs/all-dogs.component';
import { DogPageComponent } from './dog-page/dog-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'dog/:dogname', component: DogPageComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewImageComponent,
    DogListsComponent,
    AllDogsComponent,
    DogPageComponent,
    PageNotFoundComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
