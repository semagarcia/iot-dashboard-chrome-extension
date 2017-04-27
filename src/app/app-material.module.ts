import { NgModule } from '@angular/core';
import { 
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule, 
    MdCheckboxModule,
    MdChipsModule,
    MdDialogModule,
    MdCoreModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdLineModule,
    MdListModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
} from '@angular/material';

const MaterialModules = [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule, 
    MdCheckboxModule,
    MdChipsModule,
    MdDialogModule,
    MdCoreModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdLineModule,
    MdListModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
];

@NgModule({
  imports: [ ...MaterialModules ],
  exports: [ ...MaterialModules ],
})
export class MyOwnCustomMaterialModule { }