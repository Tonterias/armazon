import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { AddComponent } from './submenu/shared/add/add.component';
import { DeleteComponent } from './submenu/shared/delete/delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'submenu1', children:
      [
      { path: 'add', component: AddComponent },
      { path: 'delete', component: DeleteComponent }
      ]
    },
    { path: 'submenu2', component: AddComponent, canActivateChild: [AuthGuard], children:
      [
      { path: 'add', component: AddComponent },
      { path: 'delete', component: DeleteComponent }
      ]
    },
    { path: 'submenu3', canActivate: [AuthGuard], children:
      [
      { path: 'add', component: AddComponent },
      { path: 'delete', component: DeleteComponent }
      ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
