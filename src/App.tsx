import { GlobalProvider } from "./context/GlobalContext";
import { SpinnerProvider } from "./context/SpinnerContext";
import Router from "./Router";

function App() {
  return (
    <GlobalProvider>
      <SpinnerProvider>
        <Router />
      </SpinnerProvider>
    </GlobalProvider>
  );
}

export default App;
