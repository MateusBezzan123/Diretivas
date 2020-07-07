import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.scss'],
})
export class DiretivasNgifComponent implements OnInit {
  cursos: string[] = ['angular 2'];
  mostrarCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
