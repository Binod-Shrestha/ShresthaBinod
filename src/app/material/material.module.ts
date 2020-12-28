import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents = [MatButtonModule, MatGridListModule, MatToolbarModule, MatIconModule, MatTableModule];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
