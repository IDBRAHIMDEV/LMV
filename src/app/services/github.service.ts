import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://api.github.com/users');
  }

  searchOnGitHub(data: string) {
    return this.http.get(`https://api.github.com/search/users?q=${data}`)
  }
}
