import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProfesseurPage } from './home-professeur.page';

describe('HomeProfesseurPage', () => {
  let component: HomeProfesseurPage;
  let fixture: ComponentFixture<HomeProfesseurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProfesseurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
