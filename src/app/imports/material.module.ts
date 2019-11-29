import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatTableModule, MatIconModule, MatSortModule, MatPaginatorModule, MatInputModule,
  MatDialogModule, MatToolbarModule, MatGridListModule, MatRadioModule, MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatCardModule,
  MatSelectModule,
  MatChipsModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatGridListModule,
  MatRadioModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatNativeDateModule,
  MatDividerModule,
  MatCardModule,
  MatSelectModule,
  MatChipsModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
