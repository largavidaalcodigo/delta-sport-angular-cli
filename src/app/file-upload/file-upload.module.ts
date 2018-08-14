import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { FileSelectDirectiveDirective } from './file-select-directive.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileUploadComponent, FileSelectDirectiveDirective]
})
export class FileUploadModule { }
