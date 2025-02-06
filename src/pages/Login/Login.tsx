import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';

import styles from './Login.module.scss';
import { FormEvent } from 'react';


function Login() {
	const submit = (e: FormEvent)=> {
		e.preventDefault();
		console.log(e);
	};


	return (
		<div className={styles.login} onSubmit={submit} >
			<Headling>Вход</Headling>
			<form className={styles.form}>
				<div className={styles.field}>
					<label htmlFor="email">Ваш email</label>
				    <Input id="email" placeholder="email"/>
				</div>

				<div className={styles.field}>
					<label htmlFor="password">Ваш пароль</label>
				    <Input id="password" type="password" placeholder="password"/>
				</div>
				<Button appearence='big'>Вход</Button>
			</form>
			<div className={styles.links}>
				<div>Нет аккаунта?</div>
				<Link to="/auth/register" >Зарегистрироваться</Link>
			</div>
		</div>
	);
}

export default Login;