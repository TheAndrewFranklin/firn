import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Message from './pages/Message';
import Login from './pages/Login';
import Register from './pages/Register';
import { auth } from './firebase';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends React.Component {
	render() {
		console.log(auth.currentUser);
		return (
			<IonApp>
				<IonReactRouter>
					{auth.currentUser ? (
						<IonRouterOutlet>
							<Switch>
								<Route path='/home' component={Home} />
								<Route path='/message' component={Message} />
								<Redirect path='/' to='/home' />
							</Switch>
						</IonRouterOutlet>
					) : (
						<IonRouterOutlet>
							<Switch>
								<Route path='/login' component={Login} />
								<Route path='/register' component={Register} />
								<Redirect path='/' to='/login' />
							</Switch>
						</IonRouterOutlet>
					)}
				</IonReactRouter>
			</IonApp>
		);
	}
}

export default App;
