import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitamin-web-v2';

  constructor(translate: TranslateService) { 
      translate.addLangs(['ar', 'en']);
      translate.setDefaultLang('ar');
    const browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/ar|en/) ? browserLang : 'ar');
  }
}
