import Firebase from '../config/firebaseConfig';
import firebase from 'firebase';

export async function createUser(nome, curso, idade) {

    let idUser;

    if (firebase.apps.length > 0) {
         await Firebase.collection('users').add({
            nome, curso, idade
        }).then((docRef) => {
            idUser = docRef.id
        }).catch((error) => {
            console.log(error)
        })
    }

    return idUser;
}

export async function getUser(userId) {

    const  user = await Firebase.collection('users').doc(userId).get();
    const data = user.data();
    
    return data;
}



