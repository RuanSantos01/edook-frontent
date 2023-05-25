import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent {
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