import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCodeComponent } from './intro-code.component';

describe('IntroCodeComponent', () => {
  let component: IntroCodeComponent;
  let fixture: ComponentFixture<IntroCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
