export interface LoginBody {
	id: string;
	password: string;
}

export interface RegistrationBody {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	password: string;
	passwordConfirm: string;

	// Role (optional – system should default to 'user')
	type?: "user" | "admin";
}

export interface ResetPasswordBody {
	email: string;
}
