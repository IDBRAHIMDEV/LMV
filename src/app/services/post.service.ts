import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  persist(post: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  delete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
