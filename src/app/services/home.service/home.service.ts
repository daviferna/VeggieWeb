import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeData } from 'src/app/types/homeData';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getHomeData(language:string){
    return this.http.get<HomeData[]>('/assets/fakeData/homeData.'+language+'.json');
  }
}
