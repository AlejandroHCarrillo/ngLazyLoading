import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-coto-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './coto-edit.component.html',
  styleUrl: './coto-edit.component.css'
})
export class CotoEditComponent implements OnInit {
  cotoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cotoForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      estatus: [true] // booleano, checkbox
    });
  }

  onSubmit() {
    if (this.cotoForm.valid) {
      console.log('Datos del coto:', this.cotoForm.value);
      // Aquí puedes emitir un evento o llamar un servicio para guardar los datos
    }
  }
}

