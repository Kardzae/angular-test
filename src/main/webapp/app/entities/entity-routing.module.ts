import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'autor',
        data: { pageTitle: 'proyectoFront2App.autor.home.title' },
        loadChildren: () => import('./autor/autor.routes'),
      },
      {
        path: 'cliente',
        data: { pageTitle: 'proyectoFront2App.cliente.home.title' },
        loadChildren: () => import('./cliente/cliente.routes'),
      },
      {
        path: 'libro',
        data: { pageTitle: 'proyectoFront2App.libro.home.title' },
        loadChildren: () => import('./libro/libro.routes'),
      },
      {
        path: 'venta',
        data: { pageTitle: 'proyectoFront2App.venta.home.title' },
        loadChildren: () => import('./venta/venta.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
