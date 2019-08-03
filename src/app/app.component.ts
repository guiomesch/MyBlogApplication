import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-blog-project';
  listOfPosts: Array<Post> = [];

  constructon() {

  }

  ngOnInit() {
    //création de la liste
    this.loadList();
  }

  loadList() {
    //on initialise le premier post
    let post1 = new Post();
    post1.title = "Premier post";
    post1.content = "Angular (communément appelé 'Angular 2+' ou 'Angular v2 et plus')2,3 est un cadriciel (framework) côté client open source basé sur TypeScript dirigée par l'équipe du projet Angular à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète de AngularJS, cadriciel construit par la même équipe.";
    //on initalise le deuxième post
    let post2 = new Post();
    post2.title = "The Avengers";
    post2.content = "Le film au Québec et au Nouveau-Brunswick (Marvel's The Avengers) est un film de super-héros américain écrit et réalisé par Joss Whedon, sorti en 2012. Il se base sur l'équipe de super-héros du même nom (Les Vengeurs en français) apparaissant dans le comic book publié par Marvel Comics et constitue le sixième film de l'univers cinématographique Marvel (dont il clôt le premier arc, appelé « Phase I »).";
    //on les push dans notre list
    this.listOfPosts.push(post1);
    this.listOfPosts.push(post2);
  }
}
