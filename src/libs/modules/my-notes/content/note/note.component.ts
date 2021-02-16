import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INote } from '../../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  myCards:INote[]=[]
  @Input()
  searcByGroup :string = ""
  
  subscriptions = new Subscription();

  constructor() { }

  ngOnInit(): void {



  }

  cardClick(){
    console.log("card clicked!")
  }



}
