
import { confingStore } from "./ReduxStor/confingStore";
import { Provider } from "react-redux";
import { ReduxProductLading } from "./Components/productRedux/ReduxProductLading";

function App() {
  const myStore=confingStore()
  return (
   
   <div > 
     
        <Provider store={myStore}>
        <ReduxProductLading/>
        </Provider>
    </div>
  );
}

export default App;
