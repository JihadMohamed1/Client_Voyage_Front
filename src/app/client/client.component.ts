import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  
   items:any[]=[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.dataService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
  
  deleteItem(itemId: number): void {
    this.dataService.deleteItem(itemId).subscribe(() => {
      this.fetchItems();
      console.log(`Deleted item with id ${itemId}`);
    });
  }

}
