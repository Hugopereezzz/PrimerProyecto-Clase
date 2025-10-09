import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonajes } from './list-personajes';

describe('ListPersonajes', () => {
  let component: ListPersonajes;
  let fixture: ComponentFixture<ListPersonajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersonajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
