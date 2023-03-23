import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'
import { Categoria } from 'src/model/Categoria';

const apiUrl = 'https://localhost:7140/swagger/index.html';
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCategorias (): Observable<Categoria[]>
  {
    return this.http.get<Categoria[]>(apiUrl, httpOptions)
    .pipe(
      tap(Categoria => console.log('leu as Categorias')),
      catchError(this.handleError('getCategorias', []))
    );
  }

  getCategoriasById (id: number): Observable<Categoria>
  {
    const url = 'apiUrl/' + id;
    return this.http.get<Categoria>(url, httpOptions).pipe(
      tap(_ => console.log('leu a Categoria id = ' + id)),
      catchError(this.handleError<Categoria>('getCategoria id = ' + id))
    );
  }

  addCategoria (Categoria: Categoria): Observable<Categoria>
  {
    return this.http.post<Categoria>(apiUrl, Categoria, httpOptions).pipe(
      tap((Categoria: Categoria) => console.log('adicionou a Categoria w/ id = ' + Categoria)),
      catchError(this.handleError<Categoria>('addCategoria'))
    );
  }

  updateCategoria(id: number, Categoria: Categoria): Observable<any>
  {
    const url = 'apiUrl/' + id;
    return this.http.put(url, Categoria, httpOptions).pipe(
      tap(_ => console.log('atualiza o produto com id = ' + id)),
      catchError(this.handleError<any>('updateCategoria'))
    );
  }

  deleteCategoria (id: number): Observable<Categoria>
  {
    const url = 'apiUrl/' + id;
    return this.http.delete<Categoria>(url, httpOptions).pipe(
      tap(_ => console.log('remove o Categoria com id = ' + id)),
      catchError(this.handleError<Categoria>('deleteCategoria'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
