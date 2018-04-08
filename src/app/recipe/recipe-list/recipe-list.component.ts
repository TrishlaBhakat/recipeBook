import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe("dal","its goes with rice","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQmo3YZyD0iil3JTc-jY9Zb-CiuWSpXeQvkUnYK2iM-UpiZCw")
  ]
    
  ;
  constructor() { }
  ngOnInit() {

  }

}
