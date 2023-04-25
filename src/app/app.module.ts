import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './features/character-sheet.component';
import { SvgIcons } from './icons';
import { ChooseGamePageComponent } from './pages/choose-game-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { WelcomePageComponent } from './pages/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    MatIconModule,

    CharacterSheetComponent, 
    HomePageComponent,
    WelcomePageComponent,
    ChooseGamePageComponent,
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