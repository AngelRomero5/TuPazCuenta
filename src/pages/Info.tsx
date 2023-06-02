/* Created by Angel Romero, Cynthia Rivera and Jantony
   This is the information screen. This screen contains
   all the information related to tallersalud
*/

import { IonCard, IonContent, IonPage, IonText } from '@ionic/react';
import GeolocationButton from './components/GeolocationButton';
import './styles/styles.css';

const Info: React.FC = () => {
  return (
    <IonPage>
      {/* This is the title with the button to ask for help */}
      <GeolocationButton/>

      <IonContent fullscreen>
        {/* This card contins all the contact information */}
        <IonCard class="info-card" color="light">
          <IonText color="primary">
            <h2>Contáctanos</h2>
          </IonText>
          <p>Teléfonos: <a href="tel:(787)876-3440">(787) 876-3440</a> / <a href="tel:(787)256-7568">(787) 256-7568</a></p>
          <p>Email: <a href="mailto:info@tallersaludpr.org">info@tallersaludpr.org</a></p>

          <p>Dirección Postal: 
            <a href="https://www.google.com/maps/place/Taller+Salud/@18.4225966,-65.8355276,17z/data=!3m1!4b1!4m5!3m4!1s0x8c049df05bbcb80b:0x6da5ebb7907a354c!8m2!3d18.4225966!4d-65.8333389"> 
             PO BOX 524 Loíza, PR 00772</a>
          </p>

          {/* Vision */}
         <IonText color="primary">
            <h2>Visión</h2>
         </IonText>
         <IonText class="info-p">
            <p>Una sociedad inclusiva con comunidades organizadas y libres de opresión que ejercen
               su derecho a la salud integral y a una vida digna, e impulsan su desarrollo colectivo 
               y sostenible</p>
         </IonText>

         {/* Mision */}
          <IonText color="primary">
           <h2>Misión</h2>
          </IonText>
          <IonText class="info-p">
            <p>Elevar el liderato de las mujeres para así co-crear bienestar, salud 
               integral y oportunidades de desarrllo individual y colectivo.</p>
          </IonText>
         
         {/* Valores */}
          <IonText color="primary">
            <h2>Valores</h2>
          </IonText>
          <IonText class="info-p">
            <p>En Taller Salud vivimos estos valores en el diseño de nuestro trabajo 
              y en nuestro quehacer cotidiano, bajo la convicción firme de que son 
              esenciales para el desarrllo social de Puerto Rico y para rearfirmar una
              nueva noción de lo que es bienestar</p>
          </IonText>
          {/* Webpage link */}
          <IonText class="ion-text-right">
            <p>Más información en: <a href="https://www.tallersalud.com">Taller Salud</a></p>
          </IonText>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Info;
