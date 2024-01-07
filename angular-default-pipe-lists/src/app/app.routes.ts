import { Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { JsonPipeComponent } from '../components/json-pipe/json-pipe.component';
import { CurrencyPipeComponent } from '../components/currency-pipe/currency-pipe.component';
import { UppercasePipeComponent } from '../components/uppercase-pipe/uppercase-pipe.component';
import { LowercasePipeComponent } from '../components/lowercase-pipe/lowercase-pipe.component';
import { TitlecasePipeComponent } from '../components/titlecase-pipe/titlecase-pipe.component';
import { SlicePipeComponent } from '../components/slice-pipe/slice-pipe.component';
import { PercentPipeComponent } from '../components/percent-pipe/percent-pipe.component';
import { KeyvaluePipeComponent } from '../components/keyvalue-pipe/keyvalue-pipe.component';
import { DatePipeComponent } from '../components/date-pipe/date-pipe.component';
import { DecimalPipeComponent } from '../components/decimal-pipe/decimal-pipe.component';
import { AsyncPipeComponent } from '../components/async-pipe/async-pipe.component';
import { CustomPipeComponent } from '../components/custom-pipe/custom-pipe.component';
import { I18nPluralPipeComponent } from '../components/i18n-plural-pipe/i18n-plural-pipe.component';
import { I18nSelectPipeComponent } from '../components/i18n-select-pipe/i18n-select-pipe.component';


export const routes: Routes = [
    {path:"json-pipe",component:JsonPipeComponent},
    {path:"currency-pipe",component:CurrencyPipeComponent},
    {path: "uppercase-pipe", component: UppercasePipeComponent},
    {path: "lowercase-pipe", component: LowercasePipeComponent},
    {path: "titlecase-pipe", component:TitlecasePipeComponent},
    {path:"slice-pipe", component:SlicePipeComponent},
    {path:"percent-pipe", component:PercentPipeComponent},
    {path:"keyvalue-pipe", component:KeyvaluePipeComponent},
    {path:"date-pipe",component:DatePipeComponent},
    {path:"decimal-pipe",component:DecimalPipeComponent},
    {path:"async-pipe",component:AsyncPipeComponent},
    {path:"custom-pipe",component:CustomPipeComponent},
    {path:"i18nplural-pipe",component:I18nPluralPipeComponent},
    {path:"i18nselect-pipe",component:I18nSelectPipeComponent}
];
