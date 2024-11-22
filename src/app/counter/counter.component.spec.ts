import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('Counter Component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('Reset réussi du compteur', () => {
    const randomValue = 431;
    const zoneTexte = fixture.debugElement.query(By.css('#reset-input'));
    zoneTexte.nativeElement.value = randomValue;

    const button = fixture.debugElement.query(By.css('#reset-btn'));
    button.triggerEventHandler('click');

    fixture.detectChanges();

    expect(document.querySelector('#showCount').textContent).toBe(String(121));
  });
});
