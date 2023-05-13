import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HomeService, TabDescriptor } from 'src/app/home.service';
import { ServerService } from 'src/app/server.service';
import { HometabComponent } from './hometab.component';

@Component({
  selector: 'app-home-tabs',
  standalone: true,
  imports: [CommonModule, FormsModule,  MatIconModule, HometabComponent],
  template: `
    <div class="tabs-list" id="tabs-list" #tabslist>
      <div class="tab" *ngFor="let tab of tablist" [class.active]="tab.active">
        <mat-icon *ngIf="tab.imageType == 'svg'" svgIcon="{{tab.image}}" (click)="ScrollTo(tab)"></mat-icon>
        <mat-icon (click)="Close(tab)">close</mat-icon>
      </div>
    </div>
    <div class="tabs-container" id="tabs-container" #tabscontainer>
      <app-hometab class="tab-content" *ngFor="let tab of tablist; let index=index" [tab]="tab" id="hometab-{{index}}"> </app-hometab>
    </div>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-rows: auto 4fr;
        
      }

      .tabs-list {
        display: flex;
        overflow: hidden;
        gap: 6px;
        border-bottom: 3px solid var(--accent-bg);
        padding-top: 12px;
        padding-left: 12px;
        height: 34px;
        background: black;
        filter: drop-shadow(1px 0px 6px black);

        .tab {
          border-top-right-radius: 7px;
          border-top-left-radius: 7px;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          gap: 6px;
          background: rgb(50, 50, 50);
          fiter: var(--filter-sm);
        }

        .tab:hover,
        .tab.active {
          background: var(--accent-bg);
          color: var(--accent-clr);
          height: 36px;
        }

      }

      .tabs-container {
        display: flex;
        overflow: hidden;
        gap: 6px;
        padding: 6px;

        .tab-content {
          display: grid;
        }
      }
    `
  ]
})
export class HomeTabsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tabslist', {static: true})       tabListElement    : ElementRef | undefined
  @ViewChild('tabscontainer', {static: false})  tabContentElement : ElementRef | undefined  

  tablist : TabDescriptor[] = []
  observer : IntersectionObserver | undefined

  constructor(
    private server : ServerService, 
    private home : HomeService, 
    private changeDet : ChangeDetectorRef, 
    
  ) {
    this.home.open$.subscribe({
      next: (tabs) => {
        this.tablist = [...tabs]
      }
    })
  }

  ngAfterViewInit(): void {
    if (!this.tabContentElement) {
      return
    }
    this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          const found = this.tablist.find( t => t.element === entry.target)
          if (found) {
            found.active = entry.isIntersecting
          }
        });
    }, {});

  }

  update() {
    if (!this.tabContentElement) {
      return 
    }
    for (const t of this.tablist) {
      if (t.element) {
        this.observer?.observe(t.element)
      }
    } 
   
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect()
  }

  Close(t : TabDescriptor) {
    if (t.element) {
      this.observer?.unobserve(t.element)
    }
    this.home.Close(t)
  }

  ScrollTo(t : TabDescriptor) {
    if (t.element && this.tabContentElement) {
      const left = this.tabContentElement.nativeElement.getBoundingClientRect().left
      const containerOffset = this.tabContentElement.nativeElement.scrollLeft
      const offset = 6
      const pos = t.element.getBoundingClientRect().left
      const offsetPosition = pos + containerOffset - offset - left

      this.tabContentElement?.nativeElement.scrollTo({
        left: offsetPosition,
        behavior: "smooth"
      })
      // t.element.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // })
    }
  } 

  @HostListener('wheel',  ["$event"])
  wheel($event : WheelEvent) {
    if (!$event) {
      return 
    }
    if (!$event.shiftKey) {
      return 
    }
    if (!this.tabContentElement) {
      return 
    }
    const amount = $event.deltaY
    const el : HTMLDivElement =  this.tabContentElement.nativeElement
    el.scrollBy({
      left: amount,
      behavior: "auto" //"smooth"
    })
  }
}