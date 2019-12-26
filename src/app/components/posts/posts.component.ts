import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  editable: boolean = false;
  display: boolean = false;

  myPost: Post = {
    title: '',
    body: '',
    active: false
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll()
        .subscribe((posts: Post[]) => {
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

  persistPost(form) {

    if(form.invalid) {
      alert('Please check your form !');
      return;
    }
    this.postService.persist(this.myPost)
        .subscribe((post: Post) => {
          this.posts = [post, ...this.posts];
          
          this.myPost = {
            title: '',
            body: '',
            active: false
          }
        })
  }

  toggleForm(){
    this.display = !this.display;
  }

  info(input) {
    console.log(input);
  }

  editPost(post) {
    this.display = true;
    this.editable = true;
    this.myPost = {
      ...post
    };
  }

  updatePost(form) {
    if(form.invalid) {
      alert('Please check your form !');
      return;
    }
    this.postService.update(this.myPost)
        .subscribe(res => {
          this.editable = false;
          this.display = false;
          
          let currentPost = {
            ...this.myPost
          }

          this.posts = this.posts.map(post => post.id === this.myPost.id ? currentPost : post);
          
          console.log('posts:', this.posts)
          form.reset();
        })
  }

  switchActive(post: Post) {
    let currentPost = {
       active: !post.active
    }
    this.postService.patchPost(post.id, currentPost)
        .subscribe((res: any) => post.active = res.active)
  }

}
