import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'toast-component';

  @Output()
  public toastVisible: boolean;

  public showToast(): void {
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 9000);
  }
}
