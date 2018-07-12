import { graphql, compose } from 'react-apollo';
import { GET_CONTACTS } from './queries';
import MainPage from './MainPage.component';

export default compose(
  graphql(GET_CONTACTS, {
    name: 'contacts',
    options: {
      fetchPolicy: 'cache-and-network',
      // pollInterval: 3000,
    },
  }),
)(MainPage);
