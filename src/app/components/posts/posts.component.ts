import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  myPost: any = {
    title: '',
    body: ''
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll()
        .subscribe((posts: any[]) => {
          this.posts = posts;
        })
  }
  
  deletePost(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'Delete this post',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

            this.postService.delete(id)
                .subscribe(() => {
                  this.posts = this.posts.filter(post => post.id !== id);
                 
                  Swal.fire({
                    
                    title: 'Deleted!',
                    text: 'this post is deleted Successfully',
                    icon: 'success',
                    timer: 5000
                  
                  })
                })

       
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })

  //  if(confirm('Are you sure to delete this post ?')) {

  //    this.postService.delete(id)
  //        .subscribe(() => {
  //          this.posts = this.posts.filter(post => post.id !== id);
  //        })
  //  } 
  }

  persistPost() {
    this.postService.persist(this.myPost)
        .subscribe((post: any) => {
          this.posts = [post, ...this.posts];
          
          this.myPost = {
            title: '',
            body: ''
          }
        })
  }

}
