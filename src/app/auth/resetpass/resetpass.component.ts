import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-resetpass',
  imports: [CommonModule, FormsModule],
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css'],
})
export class ResetpassComponent {
  password = '';
  confirmPassword = '';
  token = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
    });
  }

  resetPassword() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí iría tu lógica para enviar el token y la nueva contraseña al backend
    console.log('Token:', this.token);
    console.log('Nueva contraseña:', this.password);

    // Simulación de éxito
    alert('Contraseña restablecida con éxito');
    this.router.navigate(['/login']);
  }
}