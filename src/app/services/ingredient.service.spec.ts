import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { IngredientService } from './ingredient.service';

describe('IngredientService', () => {
  let service: IngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(IngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

