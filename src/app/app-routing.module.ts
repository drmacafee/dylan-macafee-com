import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { FavRecipesComponent } from "./fav-recipes/fav-recipes.component";
import { ThingsToDoComponent } from "./things-to-do/things-to-do.component";


const routes: Routes = [
  {path: 'minecraft', component: MinecraftComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'recipes', component: FavRecipesComponent},
  {path: 'things', component: ThingsToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MinecraftComponent, AppComponent, HeaderComponent]
