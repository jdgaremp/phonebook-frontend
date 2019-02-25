import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmCancelBtnGroupComponent } from './confirm-cancel-btn-group.component';


describe('ConfirmCancelBtnGroupComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        ConfirmCancelBtnGroupComponent
      ],
    }).compileComponents();
  }));

  it('should create ConfirmCancelBtnGroupComponent', () => {
    const fixture = TestBed.createComponent(ConfirmCancelBtnGroupComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should click on cancel button', () => {

  });
});
