import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $(".top-nav").addClass("addClass");
          // $(".top-nav").removeClass("removeClass"); 

          $(".txt").addClass("addtxt");
          // $("span.one").removeClass("removeOne"); 
        }
    
        else{
          $(".top-nav").removeClass("addClass");  
          // $(".top-nav").addClass("removeClass");	

          $(".txt").removeClass("addtxt");  
          // $("span.one").addClass("removeOne");
        }
      })
    })
  
  }

}
