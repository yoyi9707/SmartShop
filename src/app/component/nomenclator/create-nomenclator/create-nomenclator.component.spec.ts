import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNomenclatorComponent } from './create-nomenclator.component';

describe('CreateNomenclatorComponent', () => {
  let component: CreateNomenclatorComponent;
  let fixture: ComponentFixture<CreateNomenclatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNomenclatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNomenclatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
