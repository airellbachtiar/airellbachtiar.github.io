import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private activeSectionSubject = new BehaviorSubject<string>('home'); // Default section
  activeSection$ = this.activeSectionSubject.asObservable(); // Observable for active section

  setActiveSection(section: string) {
    this.activeSectionSubject.next(section);
  }
}
