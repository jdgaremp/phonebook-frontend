import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonFormComponent } from './person-form.component';
import { PersonFormFieldsComponent } from './fields/person-form-fields.component';
import { ConfirmCancelBtnGroupComponent } from '../../../shared/components/confirm-cancel-btn-group/confirm-cancel-btn-group.component';
import { TextFieldComponent } from '../../../shared/components/text-field/text-field.component';
import { PersonService } from '../../services/person.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Person } from '../../models/person.model';

describe('Component: PersonFormComponent', () => {

	let fixture: ComponentFixture<PersonFormComponent>;
	let component: PersonFormComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PersonFormComponent, PersonFormFieldsComponent, ConfirmCancelBtnGroupComponent, TextFieldComponent],
			imports: [RouterTestingModule],
			providers: [PersonService, HttpClient, HttpHandler]
		}).compileComponents();
		fixture = TestBed.createComponent(PersonFormComponent);
		component = fixture.debugElement.componentInstance;
	})

	it('should create the component', () => {
		expect(component).toBeTruthy();
	})

	it('should enable the confirm button if the person exists and is valid', () => {
		component.person = new Person(1, 'Juliette', 'De Bressieux', '+32437273738');
		const personValiditySpy = spyOn(component.person, 'isValid').and.returnValue(true);

		fixture.detectChanges();

		expect(personValiditySpy).toHaveBeenCalled();
		expect(component.confirmButtonEnabled).toBeTruthy();
	})

	it('should disable the confirm button if the person exists but is not valid', () => {
		component.person = new Person(1, 'Juliette', 'De Bressieux', 'akdbd');
		const personValiditySpy = spyOn(component.person, 'isValid').and.returnValue(false);

		fixture.detectChanges();

		expect(personValiditySpy).toHaveBeenCalled();
		expect(component.confirmButtonEnabled).toBeFalsy();
	})

	it('should disable the confirm button if the person doesnt exist', () => {
		expect(component.confirmButtonEnabled).toBeFalsy();
	})

	it('should set a person and enable the confirm button if the person is valid', () => {
		const person = new Person(1, 'Juliette', 'De Bressieux', '+32437273738');
		const personValiditySpy = spyOn(person, 'isValid').and.returnValue(true);

		component.onFormChange({ value: person });

		expect(personValiditySpy).toHaveBeenCalled();
		expect(component.confirmButtonEnabled).toBeTruthy();
	})

	it('should cancel if the button clicked was Cancel', () => {
		const cancelEmitSpy = spyOn(component.cancel, 'emit');

		component.onButtonClick('cancel');

		expect(cancelEmitSpy).toHaveBeenCalledWith(null);
	});

	it('should confirm if the button clicked was Confirm', () => {
		const confirmEmitSpy = spyOn(component.confirm, 'emit');
		component.person = new Person(1, 'Juliette', 'De Bressieux', '+32437273738');

		fixture.detectChanges();

		component.onButtonClick('confirm');

		expect(confirmEmitSpy).toHaveBeenCalledWith(component.person);
	});
})