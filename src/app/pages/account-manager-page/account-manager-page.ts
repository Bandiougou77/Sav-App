import { Component } from '@angular/core';

interface User {
  username: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-account-manager-page',
  imports: [],
  templateUrl: './account-manager-page.html',
  styleUrl: './account-manager-page.css',
})
export class AccountManagerPage {
  user: User | null = {
    username: 'testuser',
    email: 'test@example.com',
    role: 'USER'
  };

  logout() {
    // TODO: Implement logout logic
  }
}
