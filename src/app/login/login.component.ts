import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email = "";
	password = "";

	@Input() MIN_LENGTH_MESSAGE = 50;
	@Output() form_signin = new EventEmitter();

	submitted: boolean | undefined;

	error: string | undefined = "";

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {

		let data = {
			email: this.email,
			password: this.password,
		}

		this.submitted = true;
		fetch('../../assets/student.json')
			.then(res => res.json())
			.then(data => {
				const students = data.users;
				console.log(students)
				const match = students.find((student: { email: string; password: string; }) => student.email === this.email && student.password === this.password);

				if (match) {
					console.log(data.users)
					window.location.href = "/home";
				} else {
					console.log("Dlogin error");
				}
			});
	}

}

