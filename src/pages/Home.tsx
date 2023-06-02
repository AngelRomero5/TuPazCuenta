/* Created by Angel Romero, Cynthia Rivera and Jantony
   This is the Home screen. This screen contains all the motivational 
   messages that the user will see. 
*/

import { IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonPage, IonButton, IonIcon, useIonAlert} from '@ionic/react';
import { arrowDownCircle } from 'ionicons/icons';
import GeolocationButton from "./components/GeolocationButton"

import './styles/styles.css';
import * as math from 'mathjs';

// These are the random numbers for selecting the images
let value = math.randomInt(1,10);
let num = value.toString();

// This is the date that is going to appear on the
// card with the Motivational message
const current = new Date();
const date = `${current.toLocaleString('default', {month: 'long'}) } ${current.getDate()}`;



const Home: React.FC = () => {
  // This is to present an alert when pressing the download 
  // button showing a confirmation message
// const [presentAlert] = useIonAlert();


  return (
    
    <IonPage>
      {/* This is the title with the button to ask for help */}
      <GeolocationButton/>
      <IonContent fullscreen>
        
        {/* Card 1 */}
        {/* This is card that contains the motivational message */}
        <IonCard class="moti-card" color="light">
          <IonCardHeader class="card-header">
            <IonCardTitle class="card-date">
              {date}
              {/* Alert message */}
              <IonButton fill="clear">
                {/* Download message button */}
                <IonIcon slot="icon-only" icon={arrowDownCircle} class="moti-download"></IonIcon>
              </IonButton> 
            </IonCardTitle>
          </IonCardHeader>
          <IonImg class="moti-img" alt="Motivational message" src={require("./images/frases_motivavionales/"+num+".png")}></IonImg>
        </IonCard>

        {/* Card 2 */}
        <IonCard class="moti-card" color="light">
          <IonCardHeader class="card-header">
            <IonCardTitle class="card-date">
              {date}
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={arrowDownCircle} class="moti-download"></IonIcon>
              </IonButton>
            </IonCardTitle>
          </IonCardHeader>
          <IonImg class="moti-img" alt="Motivational message" src={require("./images/frases_motivavionales/" + num + ".png")}></IonImg>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
