// import { ObjectId } from 'mongodb';

export type Employee = {
	employeeID: number;
	firstName: string;
	lastName: string;
	title: string;
	notes: string;
};

export const blankEmployee = {
	employeeID: 0,
	firstName: '',
	lastName: '',
	title: '',
	notes: ''
};

export type Todo = {
	id: string;
	title: string;
	stars: number;
	finished: boolean;
};
