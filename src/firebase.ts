import firebase from 'firebase/app';
import { toast } from './shared/toast';
import 'firebase/auth';

const app = firebase.apps.length
	? firebase.app()
	: firebase.initializeApp({
			apiKey: process.env['REACT_APP_FIREBASE_API_KEY'],
			authDomain: process.env['REACT_APP_FIREBASE_AUTH_DOMAIN'],
			projectId: process.env['REACT_APP_PROJECT_ID'],
			storageBucket: process.env['REACT_APP_STORAGE_BUCKET'],
			messagingSenderId: process.env['REACT_APP_MESSAGING_SENDER_ID'],
			appId: process.env['REACT_APP_APP_ID'],
			measurementId: process.env['REACT_APP_MEASUREMENT_ID'],
	  });

export const auth = app.auth();

export async function login(email: string, password: string) {
	try {
		const res = await auth.signInWithEmailAndPassword(email, password);
		toast('Logged in!');
		console.log(res);
		return true;
	} catch (error) {
		toast(error);
		console.log('yo', error);
		return false;
	}
}

export async function signup(email: string, password: string) {
	try {
		const res = await auth.createUserWithEmailAndPassword(email, password);
		toast('Signed up!');
		console.log(res);
		return true;
	} catch (error) {
		toast(error);
		console.log(error);
		return false;
	}
}

export async function logout() {
	try {
		auth.signOut();
		return true;
	} catch (error) {
		toast(error);
		console.log(error);
		return false;
	}
}
