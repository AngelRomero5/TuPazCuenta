/* Created by Angel Romero, Cynthia Rivera and Jantony
   This is the flag screen. This screen has the red flags 
   that a person has to look in a relationship
*/

import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
} from '@ionic/react';
import GeolocationButton from './components/GeolocationButton';

import './styles/styles.css';

// generate single accordion item given a title and points of info
const AccordionItem = (title: string, content: string[]) => {
  return (
    <IonAccordion value={title}>
      <IonItem slot="header" color="light">
        <IonLabel class="ion-text-center">{title}</IonLabel>
      </IonItem>
      <div slot="content">
        {
          // generate each point in content
          // We need to add some color to the cards, preferably white
          content.map((text: string) =>{
            return (
              <IonCard>
                <IonItem color="light">
                  <IonLabel text-wrap class="ion-text-center">{text}</IonLabel>
                </IonItem>
              </IonCard>
            );
          })
        }
      </div>
    </IonAccordion>)
}

const Flag: React.FC = () => {
  // Load Flag.json which has format of Object[],
  // where each object has a title and content field.
  let content = require("./Flag.json")
  return (
    <IonPage>
      {/* This is the title with the button to ask for help */}
      <GeolocationButton />      

      <IonContent>
        {/* Changed the behavior so it has only one flag open at a time */}
        <IonAccordionGroup multiple={false}>
          {
            // generate an accordion item for each object in Flag.json
            content.map((obj: any) => AccordionItem(obj.title, obj.content))
          }
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}

export default Flag;