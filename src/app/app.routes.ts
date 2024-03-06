import { Routes } from '@angular/router';
import { MovimentacaoNewComponent } from './componentes/movimentacao-new/movimentacao-new.component';
import { MovimentacaoListComponent } from './componentes/movimentacao-list/movimentacao-list.component';


export const routes: Routes = [
    {path: 'movimentacoes-list', component: MovimentacaoListComponent},
    {path: 'movimentacoes', component:MovimentacaoListComponent},
    {path: ' ', redirectTo:'movimentacoes', pathMatch: 'full' },
];

