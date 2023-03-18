import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: true };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // Collection Ref
  const ref = projectFirestore.collection(collection);

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.add(doc);
    } catch (err) {}
  };

  // delete a document
  const deleteDocument = async (id) => {};

  // Cleanup Function
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
