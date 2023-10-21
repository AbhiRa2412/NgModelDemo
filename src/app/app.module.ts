import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PieChartDemoComponent } from './pie-chart-demo/pie-chart-demo.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    PieChartDemoComponent,
    NgModelDemoComponent
  ],
  imports: [   
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule, 
    NgFor, 
    MatInputModule, 
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
