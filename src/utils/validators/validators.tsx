export const emailField = {
	required: 'Поле обязательно для заполнение',
	pattern: {
		value:
			/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
		message: 'Недопустимый формат почты',
	},
	maxLength: {
		value: 64,
		message: 'Максимум 64 символа',
	},
}

export const nameFieldNotReq = {
	pattern: {
		value: /^[a-zA-Zа-яА-ЯёЁ ]+$/g,
		message: 'Только буквы',
	},
	minLength: {
		value: 1,
		message: 'Минимальная длина 1 символов',
	},
	maxLength: {
		value: 64,
		message: 'Максимум 64 символа',
	},
}

export const passField = {
	required: 'Поле обязательно для заполнение',
	// pattern: {
	//     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/,
	//     message: "Пароль должен содержать заглавные и строчные латинские буквы, цифры, спец. символы. Длина от 8 символов"
	// }
	maxLength: {
		value: 128,
		message: 'Максимум 128 символа',
	},
}

export const requiredField = {
	required: 'Поле обязательно для заполнение',
}

export const nameField = {
	required: 'Поле обязательно для заполнение',
	pattern: {
		value: /^[a-zA-Zа-яА-ЯёЁ ]+$/g,
		message: 'Только буквы',
	},
	minLength: {
		value: 1,
		message: 'Минимальная длина 1 символов',
	},
	maxLength: {
		value: 64,
		message: 'Максимум 64 символа',
	},
}

export const phoneField = {
	required: 'Поле обязательно для заполнение',
	maxLength: {
		value: 18,
		message: 'Недопустимый формат',
	},
	minLength: {
		value: 18,
		message: 'Недопустимый формат',
	},
}

export const textSmallField = {
	required: 'Поле обязательно для заполнение',
	pattern: {
		value: /^[a-zA-Zа-яА-ЯёЁ.,:/ \d-]+$/g,
		message: 'Недопустимые символы',
	},
	minLength: {
		value: 5,
		message: 'Минимальная длина 5 символов',
	},
	maxLength: {
		value: 200,
		message: 'Максимум 200 символа',
	},
}
