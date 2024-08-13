import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./Utility/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
