import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { RecetteService } from './recette.service';

describe('RecetteService', () => {
  let service: RecetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(RecetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
