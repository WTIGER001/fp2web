import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Frame3Component } from './controls/frame3.component';
import { LinedSpacerComponent } from './controls/lined-spacer.component';
import { ChooseGameComponent } from './features/game/choose-game.component';
import { EnterPlayerComponent } from './features/game/enter-player.component';
import { SvgIcons } from './icons';
import { HomePageComponent } from './pages/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    MatIconModule,
    MatButtonModule,

    HomePageComponent,
    Frame3Component, 
    LinedSpacerComponent, 
    ChooseGameComponent, 
    EnterPlayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(reg : MatIconRegistry,  sanitizer: DomSanitizer) {
    this.registerIcons(reg, sanitizer)
  }

  registerIcons(reg : MatIconRegistry,  sanitizer: DomSanitizer) {
    // reg.addSvgIcon("orb", sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/orb.svg"))
    // reg.addSvgIcon("game", sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/game.svg"))

    for (const key of Object.keys(SvgIcons)) {
      const path = SvgIcons[key]
      reg.addSvgIcon(key, sanitizer.bypassSecurityTrustResourceUrl(path))
    }

  }
}