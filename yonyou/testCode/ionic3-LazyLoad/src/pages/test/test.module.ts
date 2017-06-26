import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { TestComponentModule } from '../../components/test/test.module';

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    TestComponentModule
  ],
  exports: [
    TestPage
  ]
})
export class TestPageModule {}
