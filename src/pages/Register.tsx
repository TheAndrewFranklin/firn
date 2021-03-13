import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { signup } from '../firebase';

interface Props {}

interface State {
	username: string;
	password: string;
}

class Register extends React.Component<Props, State> {
	state = {
		username: '',
		password: ''
	}

	public setUsername = (username: string) => this.setState({ username });

	public setPassword = (password: string) => this.setState({ password });

	registerUser = () => {
		signup(this.state.username, this.state.password);
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
						<IonRow style={{display: 'flex', justifyContent: 'center'}}>
							<IonCol style={{display: 'flex', flexDirection: 'column', maxWidth: '18rem'}}>
								<IonButton routerLink="/">Home</IonButton>
								<IonInput placeholder="username" onIonChange={(e) => this.setUsername(e.detail.value!)} />
								<IonInput placeholder="password" onIonChange={(e) => this.setPassword(e.detail.value!)} />
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
