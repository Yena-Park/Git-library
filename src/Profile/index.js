import React , {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from '../Loading';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {({data, loading}) => {
      const {viewer} = data;

      if(loading || !viewer) {
        return <Loading/>;
      }
      return (
        <div>
          {viewer.name} {viewer.login}
        </div>
      );
    }}
  </Query>
);

export default Profile;