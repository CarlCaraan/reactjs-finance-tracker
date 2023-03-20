import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // Update State
        setDocuments(results);
        setError(null);
        // console.log(results);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    // Cleanup Function / Unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
};
