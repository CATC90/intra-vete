import React from "react";
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
} from "firebase/firestore";
import { initializeApp, FirebaseApp } from "firebase/app";

type ContextProvider = {
  db?: Firestore;
};

const FirebaseContext = React.createContext<ContextProvider>({});

type FirebaseProviderProps = {
  firebaseConfig: any;
  children: JSX.Element;
};

const FirebaseProvider = ({
  firebaseConfig,
  children,
}: FirebaseProviderProps) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app as FirebaseApp);

  return (
    <FirebaseContext.Provider value={{ db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useCreateDocument = () => {
  const db = React.useContext(FirebaseContext).db;
  return async (schema: string, json: {}) => {
    try {
      if (!db) {
        throw new Error(
          'You should use "useCreateDocument" inside "FirebaseProvider" scope'
        );
      }
      const docRef = await addDoc(collection(db, schema), json);
    } catch (e) {
      throw new Error(String(e));
    }
  };
};

export default FirebaseProvider;
