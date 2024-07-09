import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { EchartsOptionPipe } from './pipes/echarts-option.pipe';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    StatisticsComponent,
    EchartsOptionPipe,
    TabComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class StatisticsModule {}
