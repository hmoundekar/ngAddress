import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatBottomSheetModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatTreeModule
    ],
    exports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatBottomSheetModule,
        MatExpansionModule,
        MatAutocompleteModule,
        MatTreeModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ],
})
export class MaterialModule { }