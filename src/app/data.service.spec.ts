import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Data Service', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("Devrait récuperer les données depuis l'API", () => {
    //Données de test pour simuler la réponse de l'API
    const mockData = { id: 1, name: 'nidhal' };
    service.getData().subscribe({
      next: (data) => {
        expect(data).toEqual(mockData);
      },
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });
});
