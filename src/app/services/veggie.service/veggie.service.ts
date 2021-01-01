import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompleteVeggie } from 'src/app/types/completeVeggie';
import { Veggie } from 'src/app/types/veggie';

@Injectable({
  providedIn: 'root'
})
export class VeggieService {

  constructor(private http:HttpClient) { }

  getVeggies(language:string):Observable<Veggie[]>{
    return this.http.get<Veggie[]>('/assets/fakeData/veggieData.'+language+'.json');
  }

  getVeggie(language:string, id:number):Observable<CompleteVeggie>{
    return this.http.get<CompleteVeggie>('/assets/fakeData/veggieInfo/'+id+'.'+language+'.json');
  }
}
