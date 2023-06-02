
import { IonButton, IonCol, IonGrid, IonHeader, IonIcon, IonLoading, IonRow, IonText, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { heart } from 'ionicons/icons';
import { Geolocation, Geoposition } from '@ionic-native/geolocation'

import '../styles/styles.css';
import { useState } from 'react';

// Determine which platform the app is running (ios or android)
// Compose message that will be opened with the click of a button
const separator = isPlatform('ios') === true ? '&' : '?';
const phoneNumber = '7877101934';
const message = '¡Ayuda! ¡MI VIDA CORRE PELIGRO! Estas son las coordenadas en donde me encuentro: ';

// Message that SMS will receive 
const finalMessage = "sms:" + phoneNumber + separator + "body=" + message;

// This component receives a message and opens the SMS app with a given phone number
const GeolocationButton: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState();
    const [position, setPosition] = useState<Geoposition>();


    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();
            // console.log(position.coords.latitude)
            setPosition(position);
            setLoading(false);
            // Open the SMS app with the location of the user
            window.open(finalMessage + 
                        "lat: " + position?.coords.latitude +
                        ", long: " + position.coords.longitude)

        } catch(e) {
            setLoading(false);
        }
    };

    return (
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol class="title-col">
                  <IonTitle class="screen-titles">
                    <IonText>TPC</IonText>
                  </IonTitle>
                </IonCol>

                <IonCol>
                {/* This message shows the user that the location is being fetched */}
                  <IonLoading
                    isOpen={loading}
                    message={"Buscando ubicación..."}
                    onDidDismiss={() => setLoading(false)}
                   />
                  <IonButton class="ion-btn-download" fill="clear" 
                    onClick={getLocation}>
                    <IonIcon slot="icon-only" icon={heart} class="msg-button"></IonIcon>
                  </IonButton>
                </IonCol>

               </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        
    );
};

export default GeolocationButton;
