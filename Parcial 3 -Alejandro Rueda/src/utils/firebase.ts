
import { initializeApp } from "firebase/app"
import  firebaseConfig from "../firebaseConfig"



const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const saveProductInDB = async ( product: Product) => {


    try {
         await addDoc(collection(db, "products"),  product
        );
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};






export default {saveProductInDB };
