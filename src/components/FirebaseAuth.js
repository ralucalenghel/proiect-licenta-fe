import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useRef, useState,
} from 'react';

import { auth } from 'firebaseui';

const FirebaseAuth = ({uiConfig,firebaseAuth}) => {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!auth) return;
    // Get or Create a firebaseUI instance.
    const firebaseUiWidget = auth.AuthUI.getInstance() || new auth.AuthUI(firebaseAuth);

    if (uiConfig.signInFlow === 'popup') {
      firebaseUiWidget.reset();
    }

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) {
        firebaseUiWidget.reset();
      }

      setUserSignedIn(!!user);
    });


    firebaseUiWidget.start(elementRef.current, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
  }, [uiConfig]);

  return (
    <div
      ref={elementRef}
    />
  );
};

export default FirebaseAuth;
