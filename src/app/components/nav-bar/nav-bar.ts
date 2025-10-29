import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, MatToolbarModule, MatIconModule,MatSlideToggleModule, FormsModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  
  pi:string="pi pi piiiiiiiiii";

  esHalloween: boolean = false;

  @Output() cambiarHalloween = new EventEmitter<boolean>();

  onToggle() {
    this.cambiarHalloween.emit(this.esHalloween);
  }
}