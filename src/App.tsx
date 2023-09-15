import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase.init';
import { useAppDispatch } from './redux/hook';
import { currentUser, loadingUser } from './redux/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadingUser(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(currentUser(user.email))
        dispatch(loadingUser(false))
      }else {
        dispatch(loadingUser(false))
      }
    });
  }, [dispatch])
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
