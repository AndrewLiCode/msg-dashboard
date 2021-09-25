import Snackbar from './components/Popups/Snackbar';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import ExplainerModal from './components/Popups/ExplainerModal'
import { DashboardProvider } from './context';

function App() {
  return (
    <DashboardProvider>
      <ExplainerModal />
      <Snackbar />
      <Header />
      <Messages />
    </DashboardProvider>
  );
}

export default App;
