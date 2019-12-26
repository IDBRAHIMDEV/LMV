import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:5000/posts');
  }

  persist(post: Post) {
    return this.http.post('http://localhost:5000/posts', post);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:5000/posts/${id}`);
  }

  update(post: Post) {
    return this.http.put(`http://localhost:5000/posts/${post.id}`, post);
  }

  patchPost(id, data) {
     return this.http.patch(`http://localhost:5000/posts/${id}`, data);
  }

}
