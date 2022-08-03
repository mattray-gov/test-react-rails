import ReactOnRails from 'react-on-rails';

import TestApp from '../bundles/TestApp/components/TestApp';
import Banner from '../bundles/TestApp/components/Banner'


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  TestApp,
  Banner
});