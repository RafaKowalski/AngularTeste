import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/model/Categoria';
import { ApiService } from 'src/Services/api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  
  displayedColumns: string[] = ['nome', 'imagem', 'acao'];
  dataSource: Categoria[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit()  {
    this.api.getCategorias()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}

 

