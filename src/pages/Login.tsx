import React from 'react';
import {
	IonButton,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonInput,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { login } from '../firebase';
import { toast } from '../shared/toast';

interface Props {}

interface State {
	email: string;
	password: string;
}

class Login extends React.Component<Props, State> {
	public state = {
		email: '',
		password: '',
	};

	public setEmail = (email: string) => this.setState({ email });
	public setPassword = (password: string) => this.setState({ password });

	public loginUser = async () => {
		const res = await login(this.state.email, this.state.password);

		if (!res) {
			toast('Error logging in with your credentials');
		} else {
			toast('You have logged in');
		}
	};

	public render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>App Name</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonGrid>
						<IonRow style={{ display: 'flex', justifyContent: 'center' }}>
							<IonCol style={{ display: 'flex', flexDirection: 'column', maxWidth: '18rem' }}>
								<IonButton routerLink='/register'>Go To Register</IonButton>
								<IonInput placeholder='email' onIonChange={(e) => this.setEmail(e.detail.value!)} />
								<IonInput placeholder='password' onIonChange={(e) => this.setPassword(e.detail.value!)} />
								<IonButton onClick={this.loginUser}>Login</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		);
	}
}

export default Login;
