import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
})
export class AddformComponent {
  addItemForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder,private dataService: DataService,private router: Router ) {
    this.initAddItemForm();
  }

  initAddItemForm(): void {
    this.addItemForm = this.formBuilder.group({
      id_voyage: [null, Validators.required],
      num: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
    });
  }

  onAddItem(): void {
    if (this.addItemForm.valid) {
      const newItemData = this.addItemForm.value;
      console.log({newItemData});
      this.dataService.addItem(newItemData).subscribe(() => {
        this.addItemForm.reset();
        this.router.navigate(['/Clients']);
      });
    }
  }
}
