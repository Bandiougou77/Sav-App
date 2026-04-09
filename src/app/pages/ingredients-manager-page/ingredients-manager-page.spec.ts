import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { IngredientsManagerPage } from './ingredients-manager-page';

describe('IngredientsManagerPage', () => {
  let component: IngredientsManagerPage;
  let fixture: ComponentFixture<IngredientsManagerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsManagerPage],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
