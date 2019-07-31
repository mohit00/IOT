import { NgModule } from '@angular/core';
import { NbCardModule ,NbLayoutModule,NbIconModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbLayoutModule,NbIconModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
