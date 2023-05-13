import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private  openSub$ = new BehaviorSubject<TabDescriptor[]>([])
  open$ = this.openSub$.asObservable()

  constructor() { }

  public Open(t : TabDescriptor) {
    const current = this.openSub$.value
    const next = [...current]

    const found = next.find(tab => tab.type == t.type && tab.id == t.id)
    if (!found) {
      next.push(t)
      this.openSub$.next(next)
    }
  }

  public Close(t : TabDescriptor) {
    const current = this.openSub$.value
    const next = [...current]

    const found = next.findIndex(tab => tab.type == t.type && tab.id == t.id)
    if (found >=0 ) {
      next.splice(found,1)
      this.openSub$.next(next)
    }
  }

  public IsOpen(t : TabDescriptor) : boolean {
    const current = this.openSub$.value
    const found = current.findIndex(tab => tab.type == t.type && tab.id == t.id)
    if (found >=0 ) {
     return true
    }
    return false
  }
}

export interface TabDescriptor  {
  image : string
  imageType : 'svg' | 'png'
  name : string
  type : string
  id : string
  element ?: HTMLElement
  active ?: boolean
  data ?: any
}
