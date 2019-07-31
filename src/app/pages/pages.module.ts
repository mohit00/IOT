import { NgModule } from '@angular/core';
import { NbMenuModule, NbLayoutModule,NbTreeGridModule, 
  NbIconModule,NbInputModule,NbCardModule,NbButtonModule , NbDialogModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { DeviceComponentComponent } from '../device-component/device-component.component';
  @NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbLayoutModule,
    NbTreeGridModule, NbIconModule,
     NbCardModule, NbInputModule,
      NbButtonModule,
       NbDialogModule
  ], providers:[   ],
  declarations: [
    PagesComponent,
    UserComponent,
    DeviceComponentComponent,
  ]
})
export class PagesModule {
}
