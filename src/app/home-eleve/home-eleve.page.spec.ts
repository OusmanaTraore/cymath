import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeElevePage } from './home-eleve.page';

describe('HomeElevePage', () => {
  let component: HomeElevePage;
  let fixture: ComponentFixture<HomeElevePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
