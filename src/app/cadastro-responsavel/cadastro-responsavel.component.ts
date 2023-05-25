import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-responsavel',
  templateUrl: './cadastro-responsavel.component.html',
  styleUrls: ['./cadastro-responsavel.component.css']
})
export class CadastroResponsavelComponent {
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