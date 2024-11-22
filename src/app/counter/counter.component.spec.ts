import { ComponentFixture, TestBed } from '@angular/core/testing';
// Import des outils de test Angular pour configurer le module de test et manipuler la fixture

import { CounterComponent } from './counter.component';
// Importation du composant à tester

import { By } from '@angular/platform-browser';
// Utilisé pour interagir avec le DOM via des sélecteurs CSS

import { AppRoutingModule } from '../app-routing.module';
// Importation du module de routage (nécessaire pour inclure les routes utilisées par le composant)

describe('CounterComponent', () => {
  let component: CounterComponent; // Déclare une variable pour l'instance du composant
  let fixture: ComponentFixture<CounterComponent>; // Permet d'accéder au DOM et au composant pour les tests

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule], // Configure le module de test avec les dépendances nécessaires, ici le module de routage
    });
    fixture = TestBed.createComponent(CounterComponent); // Création d'une fixture pour le composant
    component = fixture.componentInstance; // Récupération de l'instance du composant à partir de la fixture
  });

  it('should increment count by 1 when increment() is called', () => {
    component.count = 0; // Initialisation de la propriété `count` du composant à 0
    component.increment(); // Appelle la méthode `increment` du composant
    expect(component.count).toBe(1); // Vérifie que la valeur de `count` est maintenant 1
  });

  it('should emit countChanged event with new count value', () => {
    spyOn(component.countChanged, 'emit');
    // Espionne la méthode `emit` de l'événement `countChanged` pour vérifier si elle est appelée
    component.increment(); // Appelle la méthode `increment` du composant
    expect(component.countChanged.emit).toHaveBeenCalledWith(1);
    // Vérifie que `emit` a été appelé avec la valeur 1
  });

  //Tester en pointant sur l'élement du DOM et non sur l'atribut du component
  it('Le compteur est bien incremente', () => {
    const element = fixture.debugElement.query(By.css('#increment-btn'));
    // Recherche dans le DOM un élément avec l'ID `increment-btn`
    element.triggerEventHandler('click');
    // Simule un clic sur le bouton d'incrémentation
    fixture.detectChanges();
    // Met à jour le DOM après le clic
    expect(document.querySelector('#showCount')?.textContent).toBe('1');
    // Vérifie que l'élément avec l'ID `showCount` affiche "1"
  });

  it('Reset du compteur', () => {
    const randomValue = 123;
    // Valeur aléatoire à assigner au compteur
    const element = fixture.debugElement.query(By.css('#reset-input'));
    // Recherche dans le DOM un élément avec l'ID `reset-input`
    element.nativeElement.value = randomValue;
    // Assigne la valeur `randomValue` à cet élément (champ de texte)
    const element2 = fixture.debugElement.query(By.css('#reset-btn'));
    // Recherche le bouton de réinitialisation
    element2.triggerEventHandler('click');
    // Simule un clic sur le bouton
    fixture.detectChanges();
    // Met à jour le DOM après le clic
    expect(document.querySelector('#showCount')?.textContent).toBe(
      String(randomValue)
    );
    // Vérifie que l'élément avec l'ID `showCount` affiche la valeur aléatoire convertie en chaîne
  });
});
