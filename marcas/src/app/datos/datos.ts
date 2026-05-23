import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../services/api';

export interface Marcas {
  nombre_categoria: string;
  logo_marca: number;
  nombre_marca: number;
  promo_marca: string;
  imagen_marca: ImageBitmap;
}

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './datos.html',
  styleUrl:'./datos.css'
})
export class DatosComponent implements OnInit {
  public displayedColumns: string[] = ['nombre_categoria', 'logo_marca', 'texto', 'lista_marcas'];
  public dataSource: Marcas[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cargarMarcas();
  }

  public cargarMarcas(): void {
    this.apiService.getMarcas().subscribe({
      next: (data) => {
        this.dataSource = data;
        console.log('¡Marcas cargadas exitosamente!', this.dataSource);
      },
      error: (err) => {
        console.error('Error al cargar los alumnos:', err);
      }
    });
  }
}
