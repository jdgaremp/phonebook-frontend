import { TestBed, async } from '@angular/core/testing';
import { PersonTableComponent } from './person-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


describe('Component: PersonTable', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PersonTableComponent],
			imports: [RouterTestingModule,
				FontAwesomeModule]
		}).compileComponents();
	})

	it('should create the component', () => {
		let fixture = TestBed.createComponent(PersonTableComponent);
		let component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	})
})