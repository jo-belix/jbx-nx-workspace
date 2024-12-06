import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
  
  private readonly title = inject(Title);

  constructor() {
    this.title.setTitle('jbx-account');
  }


  
}
