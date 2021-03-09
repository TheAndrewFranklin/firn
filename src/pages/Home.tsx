import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { toast } from '../shared/toast';

class Home extends React.Component {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>App Name</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen>
					<IonGrid>
						<IonRow style={{display: 'flex', justifyContent: 'center'}}>
							<IonCol style={{display: 'flex', flexDirection: 'column', maxWidth: '18rem'}}>
								<IonButton onClick={() => toast('Test')}>Test Toast</IonButton>
								<IonButton routerLink="/login">Login</IonButton>
								<IonButton routerLink="/register">Register</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
