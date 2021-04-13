import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { toast } from '../shared/toast';
import { auth } from '../firebase';

class Home extends React.Component {
	checkLoggedIn = () => {
		console.log(auth.currentUser);
	};

	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Boatr</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonGrid>
						<IonRow style={{ display: 'flex', justifyContent: 'center' }}>
							<IonCol style={{ display: 'flex', flexDirection: 'column', maxWidth: '18rem' }}>
								<IonButton onClick={() => toast('Test')}>Test Toast</IonButton>
								<IonButton onClick={() => this.checkLoggedIn()}>Check Logged In</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
