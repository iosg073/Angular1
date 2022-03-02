import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {

    // send message after fetching the heores

    this.messageService.add('HeroService: Fetched heroes');
    return of(HEROES);
    }

  constructor(private messageService:MessageService ) { }

  
    
}
