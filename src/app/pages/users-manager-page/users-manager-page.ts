import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  password?: string;
  createdAt: Date;
}

@Component({
  selector: 'app-users-manager-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './users-manager-page.html',
  styleUrl: './users-manager-page.css',
})
export class UsersManagerPage {
  users: User[] = [];
  currentUser: User | null = null;
  newUser: Partial<User> = {};
  selectedUser: User | null = null;

  addUser() {
    // TODO: Implement add user logic
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
  }

  updateUser() {
    // TODO: Implement update user logic
  }

  deleteUser(id: number) {
    // TODO: Implement delete user logic
  }
}
