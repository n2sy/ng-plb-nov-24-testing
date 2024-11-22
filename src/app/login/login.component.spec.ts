import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthService', ['login', 'getData']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: spy }],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should call AuthService.authenticate when login() is called', () => {
    component.authenticate();
    expect(authServiceSpy.login).toHaveBeenCalled();
  });

  it('Recuperer le data avec succès aprés un appel asynchrone', fakeAsync(() => {
    // Injection du service CountService dans le contexte de test
    let authSer = TestBed.inject(AuthService);

    //Configure la méthode espionnée pour qu’elle retourne une promesse résolue.
    //Simule le comportement attendu d’une méthode asynchrone.
    authServiceSpy.getData.and.returnValue(Promise.resolve('Data valide'));

    // Déclenche la détection de changements sur le composant
    // Cela force Angular à vérifier si des changements sont survenus (ex: dans les propriétés)
    // et à exécuter les cycles de vie nécessaires (comme ngOnInit) si besoin
    fixture.detectChanges();

    // Avance le temps simulé pour que les appels asynchrones se terminent
    // Cette ligne "attend" que les promesses ou les délais (setTimeout, etc.) se terminent
    tick();

    // Vérifie que la propriété data du composant a bien été mise à jour
    // avec la valeur 'Data valide' retournée par la méthode simulée getData
    expect(component.data).toBe('Data valide');
  }));
});
