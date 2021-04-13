import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonText,
	IonButtons,
	IonBackButton,
} from '@ionic/react';
import React from 'react';

class Message extends React.Component {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot='start'>
							<IonBackButton />
						</IonButtons>
						<IonTitle>Boatr</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonGrid>
						<IonRow style={{ display: 'flex', justifyContent: 'center' }}>
							<IonCol style={{ display: 'flex', flexDirection: 'column', maxWidth: '18rem' }}>
								<IonText>This is a dummy message</IonText>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		);
	}
}

export default Message;
