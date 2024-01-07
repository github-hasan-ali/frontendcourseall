import { Component } from '@angular/core';
import { Person } from '../../models/json-pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-json-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-pipe.component.html',
  styleUrl: './json-pipe.component.scss'
})
export class JsonPipeComponent{

  person1:Person={firstName:"Tayyip", lastName:"Kilic", age:26}
  person2:Person={firstName:"Recep", lastName:"Karabacak", age:20}
  person3:Person={firstName:"Hasan", lastName:"Kart", age:36}
  person4:Person={firstName:"Emre", lastName:"Avcu", age:23}

  
  constructor(){}
  
    

}
