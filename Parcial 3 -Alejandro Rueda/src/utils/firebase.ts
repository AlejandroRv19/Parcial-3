
import { initializeApp } from "firebase/app"
import  firebaseConfig from "../firebaseConfig"



const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const SaveRecipe = async ( product: recipe) => {


    try {
         await addDoc(SaveRecipe(db, "recipe"),  recipe
        );
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};






export default {SaveRecipe };
