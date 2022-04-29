import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  public publicaciones: any;

  constructor(
    private _PostService: PostService
  ) { }

  ngOnInit(): void {
    this.obtenerPost();
  }

  obtenerPost(){
    this._PostService.getPosts().subscribe(
      response=>{
        this.publicaciones = response.postFound;
        console.table(response.postFound)
      }
    )
  }


}
