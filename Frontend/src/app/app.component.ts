import { Component } from '@angular/core';
import { SocialAuthService,SocialUser } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/services/Auth';
import { SessionService } from 'src/services/SessionService';
import { faCoffee, faHeart, faStar, faCheck,
  faHome, faUser, faSearch, faPlus, faEdit, faArrowLeft,
  faTrash,  faEnvelope, faPhone,  faCalendar, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faGithub, faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faY = faYoutube;
  faF = faFacebook;
  faT = faTwitter;
  faL = faLinkedin;
  faU = faUser;
  faH = faHeart;
  faP = faPhone;
  faHo = faHome;

  title = 'Angular-Frontend';
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;
  tieneCofradia: boolean = false;

  constructor(
    private authService: SocialAuthService,
    private normalAuthService: AuthService,
    private sessionService: SessionService
    ){}

  ngOnInit(){
    }

  logout(){
    this.authService.signOut();
    this.normalAuthService.cerrarSesion();
  }
}
