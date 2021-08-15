import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNomenclatorsComponent } from './list-nomenclators.component';

describe('ListNomenclatorsComponent', () => {
  let component: ListNomenclatorsComponent;
  let fixture: ComponentFixture<ListNomenclatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNomenclatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNomenclatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
