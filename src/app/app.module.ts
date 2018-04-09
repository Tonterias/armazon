import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { BodyComponent } from './body/body.component';
import { Submenu1Component } from './submenu/submenu1/submenu1.component';
import { Submenu2Component } from './submenu/submenu2/submenu2.component';
import { Submenu3Component } from './submenu/submenu3/submenu3.component';
import { AddComponent } from './submenu/shared/add/add.component';
import { DeleteComponent } from './submenu/shared/delete/delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';


// const appRoutes: Routes = [
//   { path: '', component: BodyComponent },
//   { path: 'submenu1', children:
//     [
//     { path: 'add', component: AddComponent },
//     { path: 'delete', component: DeleteComponent }
//     ]
//   },
//   { path: 'submenu2', children:
//     [
//     { path: 'add', component: AddComponent },
//     { path: 'delete', component: DeleteComponent }
//     ]
//   },
//   { path: 'submenu3', children:
//     [
//     { path: 'add', component: AddComponent },
//     { path: 'delete', component: DeleteComponent }
//     ]
//   },
//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: '/not-found' }
//   ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubmenuComponent,
    BodyComponent,
    Submenu1Component,
    Submenu2Component,
    Submenu3Component,
    AddComponent,
    DeleteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
