import { createRoot } from 'react-dom/client';

import MuiThemeProvider from './theme';
import ToastifyProvider from './toastify';

const Root = createRoot(document.getElementById('root'));

export { Root, MuiThemeProvider, ToastifyProvider };
