import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-gestor',
  templateUrl: './cadastro-gestor.component.html',
  styleUrls: ['./cadastro-gestor.component.css']
})
export class CadastroGestorComponent {
  profileIcon: string = '../../assets/profile.png';

  onPhotoChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profileIcon = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}