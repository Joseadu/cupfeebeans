import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatasComponent } from './catas.component';

describe('CatasComponent', () => {
  let component: CatasComponent;
  let fixture: ComponentFixture<CatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
