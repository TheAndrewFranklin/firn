import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { signup } from '../firebase';

const Register: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const registerUser = () => {
		signup(username, password);
	};

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
							<IonInput placeholder="username" onIonChange={(e: any) => setUsername(e.target?.value)} />
							<IonInput placeholder="password" onIonChange={(e: any) => setPassword(e.target?.value)} />
							<IonButton onClick={registerUser}>Register</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};


export default Register;
