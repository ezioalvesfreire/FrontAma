import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      <p>AMA todos os direitos reservados copyrigth &copy; 2021</p>
    <!--  Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019 -->
    </span>
    <div class="socials">
    <!--  <a href="#" target="_blank" class="ion ion-social-github"></a> -->
      <a href="https://www.facebook.com/ama.litoralsantacatarina" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
