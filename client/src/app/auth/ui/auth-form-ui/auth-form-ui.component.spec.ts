import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormUiComponent } from './auth-form-ui.component';

describe('AuthFormUiComponent', () => {
  let component: AuthFormUiComponent;
  let fixture: ComponentFixture<AuthFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFormUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
