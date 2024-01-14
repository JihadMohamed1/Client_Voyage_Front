import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
})
export class EditFormComponent implements OnInit  {

  addItemForm!: FormGroup ;
  item:any={};
  itemId!: number;

  constructor(private formBuilder: FormBuilder,private dataService: DataService,private router: Router,private route: ActivatedRoute) {
    this.initAddItemForm();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = +params['id']; // '+' converts string to number
      this.fetchItem(this.itemId);
    });
  }

  fetchItem(id:number): void {
    this.dataService.getItemById(id).subscribe((data) => {
      this.item = data;
      console.log({data});
      this.populateForm();
    });
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
  populateForm(): void {
    this.addItemForm.patchValue({
      id_voyage: this.item.id_voyage,
      num: this.item.num,
      email: this.item.email,
      nom: this.item.nom,
      prenom: this.item.prenom,
    });
  }

  onAddItem(): void {
    if (this.addItemForm.valid) {
      const newItemData = this.addItemForm.value;
      console.log({newItemData});
      this.dataService.editItem(this.itemId,newItemData).subscribe(() => {
        this.addItemForm.reset();
        this.router.navigate(['/Clients']);
      });
    }
  }
}
