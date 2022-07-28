import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPaisComponent } from './pais/lista-pais/lista-pais.component';
import { DetallePaisComponent} from './pais/detalle-pais/detalle-pais.component';



const routes: Routes = [
  {path: '', component: ListaPaisComponent},
  {path: 'detalle/:id', component: DetallePaisComponent},
 // {path: 'nuevo', component: NuevoProductoComponent},
  //{path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }