import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  actionOnBook(action: string){
    switch(action){
      case 'add': this.router.navigate(['add'])
                  break;
      default: break;
    }
  }

}
