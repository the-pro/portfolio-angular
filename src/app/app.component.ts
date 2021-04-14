import { Component, ElementRef, Inject, NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventManager } from '@angular/platform-browser';

function _window(): any {
  return window
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent{
  title = 'portfolio'
  ed = 0
  constructor(private element : ElementRef, private snackBar: MatSnackBar){}
  ngOnInit(){
    
    this.response()

    window.addEventListener("resize",()=> {
      this.response()
    })
    
  }

  downloadOnServer(url: string){

  }

  response(){
    let x = 150*1440/window.innerWidth
    let d =  this.element.nativeElement.querySelector("#body").offsetHeight+50
    let f =  this.element.nativeElement.querySelector("#about").offsetHeight
    this.element.nativeElement.querySelector("#wh").style.height = `${d}px`
      // this.element.nativeElement.querySelector("#wh").style.height = `${x}%`
      if(window.innerWidth<900){
        this.element.nativeElement.querySelector("#about").style.width = "80%"
        this.element.nativeElement.querySelector("#body").style.width = "80%"
        // this.element.nativeElement.querySelector("#wh").style.height = `${d}px`
        if(this.ed === 0){
          this.element.nativeElement.querySelector("#body").innerHTML = "<div id='te'><h1>Education</h1></div>"+this.element.nativeElement.querySelector("#body").innerHTML
          this.ed++
        }

        
      }
      else{
        this.element.nativeElement.querySelector("#about").style.width = "20%"
        this.element.nativeElement.querySelector("#body").style.width = "50%"
        // this.element.nativeElement.querySelector("#wh").style.height = `${d}px`
        // this.element.nativeElement.querySelector("#wh").style.height = "150%"
        if(this.ed === 1){
          this.element.nativeElement.querySelector("#te").remove()
          this.ed--
        }
      }

  }

  openSnackBar(message:string,action:string){
    this.snackBar.open(message,action,{
      duration:2000
    })
  }
}
