import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContadorComponent],
    exports: [
        ContadorComponent],
})
export class ContadorModule { }
