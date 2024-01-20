import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
   title :string = "";
   isSubmit :boolean ;
  constructor() { }
}
