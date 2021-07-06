import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { toast } from '../shared/toast';
import { logout } from '../firebase';

class Home extends React.Component {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Firn</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonGrid>
						<IonRow style={{ display: 'flex', justifyContent: 'center' }}>
							<IonCol style={{ display: 'flex', flexDirection: 'column', maxWidth: '18rem' }}>
								<IonButton onClick={logout}>Log out</IonButton>
								<IonButton onClick={() => toast('Test')}>Test Toast</IonButton>
								<IonButton routerLink='/message'>Go To Message</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
