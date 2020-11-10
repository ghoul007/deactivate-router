import { CanComponentDeactivate } from './CanDeactivateGuard.guard';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, CanComponentDeactivate {

  form1: FormGroup
  constructor(private fb: FormBuilder) { }


  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.form1.dirty) {
      $event.returnValue = true;
    }
  }



  ngOnInit(): void {
    this.form1 = this.fb.group({
      name1: ["test"],
      name2: [""]
    })


    this.form1.get('name1').valueChanges.subscribe(val => {
      if (val && (val.trim() === "test")) {
        this.form1.reset({name1: "test"});
      }
    });
 

    // window.addEventListener('beforeunload', function (e) {
    //   e.preventDefault();
    //   alert('fgghg')
    //   e.returnValue = '';
    // });
    // window.addEventListener('unload', function(e) {
    //     if (e.returnValue === true) {
    //   alert('fgghg')
    //     }
    // });

  }

  sendForm() {
    console.log(this.form1.value);
  }


  canDeactivate() {

    if (this.form1.dirty) {
      confirm('hello');
    }
    return true
  }




}
