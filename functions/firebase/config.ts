import * as admin from "firebase-admin";
import * as serviceAccount from
    "./productad-181d7-firebase-adminsdk-ayh29-a2c09e8bdf.json";

admin.initializeApp({
    credential: admin.credential.cert(
        serviceAccount as admin.ServiceAccount,
    ),
});

export const firebaseApp = admin;
