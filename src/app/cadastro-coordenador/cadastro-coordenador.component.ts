import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-coordenador',
  templateUrl: './cadastro-coordenador.component.html',
  styleUrls: ['./cadastro-coordenador.component.css']
})
export class CadastroCoordenadorComponent {
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