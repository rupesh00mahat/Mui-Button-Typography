import { Provider } from 'react-redux';
import { store } from './store/store';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Showcase/>
      </Provider>
    </div>
  );
}

export default App;
