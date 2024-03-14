# AD Image Generator
This project is a basic Express API integrated with Firebase Firestore for generating image ad ideas and other functionalities.

## Getting Started

1. Clone the repository:
   git clone https://github.com/Pradeep44/ad-image-generator.git

2. Install dependencies
    cd ad-image-generator
    npm install

3. Set up Firebase;
    Create a Firebase project on the Firebase Console: https://console.firebase.google.com/
    Obtain your Firebase Admin SDK service account credentials (*******-dfsjdjf0-sfdjdj-*******.json) and save it in the firebase directory.

4. Set environment variables
    Create a .env file in the project directory and add the following variables:
    SECRET_KEY=********
    CHATGPT_SECRET_KEY=********
    STABILITYAI_SECRET_KEY=********
    STRIPE_CHECKOUT_URL=********

5. Start the server locally
    npm run serve

6. For deploying functions to your firebase
    npm run deploy

Endpoints
    -  POST /image/genIdea: Generate a creative image ad idea for a product.
    -  POST /image/gen: Generate an image based on a product ad idea.
    -  GET /image/genOverlay: Generate an image overlay with a specified title.
    -  GET /subscribe: Redirect to a subscription page.

Security
    Ensure that your Firestore security rules are properly configured to restrict access to your Firestore database. Refer to the Firestore Rules section in the Firebase Console.

License
    This project is licensed under the GNU General Public license v2.0