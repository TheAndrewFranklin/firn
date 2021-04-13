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
import { signup } from '../firebase';

interface Props {}

interface State {
	email: string;
	password: string;
}

class Register extends React.Component<Props, State> {
	state = {
		email: '',
		password: '',
	};

	public setEmail = (email: string) => this.setState({ email });
	public setPassword = (password: string) => this.setState({ password });

	registerUser = () => {
		signup(this.state.email, this.state.password);
	};

	render() {
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
								<IonButton routerLink='/login'>Go To Login</IonButton>
								<IonInput placeholder='email' onIonChange={(e) => this.setEmail(e.detail.value!)} />
								<IonInput placeholder='password' onIonChange={(e) => this.setPassword(e.detail.value!)} />
								<IonButton onClick={this.registerUser}>Register</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		);
	}
}

export default Register;
