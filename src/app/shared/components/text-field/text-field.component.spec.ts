import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TextFieldComponent } from './text-field.component';


describe('TextFieldComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        TextFieldComponent
      ],
    }).compileComponents();
  }));

  it('should create TextFieldComponent', () => {
    const fixture = TestBed.createComponent(TextFieldComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
