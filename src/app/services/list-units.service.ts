import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataLocation } from '../types/data-locations.interface'
import { Locations } from '../types/locations.interface'

@Injectable({
  providedIn: 'root'
})
export class ListUnitsService {

  readonly url = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitSubject: BehaviorSubject<Locations[]> = new BehaviorSubject<Locations[]>([]);
  private allUnits$: Observable<Locations[]> = this.allUnitSubject.asObservable();
  private filteredUnits: Locations[] = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get<DataLocation>(this.url).subscribe(data => {
      this.allUnitSubject.next(data.locations);
      this.filteredUnits = data.locations;
    })
  }

  getUnitsList(): Observable<Locations[]>{
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: Locations[]) {
    this.filteredUnits = value;
  }

}
