
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import {Hello} from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <h1>Hello World</h1>
  <App />
  <Hello />
  </>

)
