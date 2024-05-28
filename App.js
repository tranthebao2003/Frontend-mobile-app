import RootElement from './source/component/Navigation'
import { Provider } from 'react-redux';
import Store from './source/redux/store/Store';

export default function App() {
  return (
    <Provider store ={Store}>
      <RootElement/>
    </Provider>
  );
}
