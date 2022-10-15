import App from './src'
import { Amplify } from 'aws-amplify';
// @ts-expect-error
import awsconfig from './src/aws-exports';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

export default App;
