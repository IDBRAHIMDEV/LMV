import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  users = [];
  search: string = "";
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.githubService.getUsers()
        .subscribe((users: any[]) => this.users = users)
  }

  searchUser() {
    this.githubService.searchOnGitHub(this.search)
        .subscribe(res => {
          let { items }: any = res;

          this.users = items;
        })
  }

}
