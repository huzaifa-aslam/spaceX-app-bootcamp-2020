import gql from 'graphql-tag';

// MissionInfo

export const LaunchesInfo=gql`
query LaunchesInfo {
  launches {
    mission_name
    mission_id
    launch_year
    launch_success

  }
}

`