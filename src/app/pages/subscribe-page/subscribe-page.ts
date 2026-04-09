import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

@Component({
  selector: 'app-subscribe-page',
  imports: [FormsModule],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
  userData: UserData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'USER'
  };

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  onSubmit() {
    // TODO: Implement subscription logic
  }
}
