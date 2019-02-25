import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MsgBoxComponent } from './msg-box.component';


describe('MsgBoxComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MsgBoxComponent
      ],
    }).compileComponents();
  }));

  it('should create MsgBoxComponent', () => {
    const fixture = TestBed.createComponent(MsgBoxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
