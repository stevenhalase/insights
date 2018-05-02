import RaidersLogo from '../assets/images/raiders-logo.png';
import Constants from '../utils/Constants';

export default class APIService {
  constructor() {

  }

  static getUser() {
    return new Promise((resolve, reject) => {
      resolve({
        FirstName: 'Joe',
        LastName: 'Smith',
        ProfileImage: null,
        Team: {
          Name: 'Racine Raiders',
          Logo: RaidersLogo,
          Staff: [
            {
              Position: Constants.StaffPositions.HC.Value,
              FirstName: 'Jim',
              LastName: 'Jones',
              User: null
            },
            {
              Position: Constants.StaffPositions.OC.Value,
              FirstName: 'Jerry',
              LastName: 'James',
              User: null
            }
          ],
          Roster: [
            {
              Position: Constants.PlayerPositions.QB.Value,
              FirstName: 'Simon',
              LastName: 'Jenkins',
              JerseyNumber: 8,
              Biometrics: {
                Height: 75,
                Weight: 205
              },
              User: null
            },
            {
              Position: Constants.PlayerPositions.RB.Value,
              FirstName: 'Joe',
              LastName: 'Smith',
              JerseyNumber: 28,
              Biometrics: {
                Height: 72,
                Weight: 210
              },
              User: null
            },
            {
              Position: Constants.PlayerPositions.DE.Value,
              FirstName: 'Eric',
              LastName: 'Berry',
              JerseyNumber: 72,
              Biometrics: {
                Height: 74,
                Weight: 235
              },
              User: null
            }
          ],
          Games: [
            {
              HomeTeam: {
                Name: 'Kenosha Football Club',
                Logo: null
              },
              AwayTeam: {
                Name: 'Racine Raiders',
                Logo: RaidersLogo
              },
              Date: new Date('2017-05-20T12:00:00Z'),
              FinalScore: {
                HomeTeam: 21,
                AwayTeam: 14
              }
            },
            {
              HomeTeam: {
                Name: 'Racine Raiders',
                Logo: RaidersLogo
              },
              AwayTeam: {
                Name: 'Chi City Ducks',
                Logo: null
              },
              Date: new Date('2017-06-03T14:00:00Z'),
              FinalScore: {
                HomeTeam: 35,
                AwayTeam: 21
              }
            },
            {
              HomeTeam: {
                Name: 'Mid States Football League',
                Logo: null
              },
              AwayTeam: {
                Name: 'Racine Raiders',
                Logo: RaidersLogo
              },
              Date: new Date('2017-06-10T03:00:00Z'),
              FinalScore: {
                HomeTeam: 49,
                AwayTeam: 21
              },
            },
            {
              HomeTeam: {
                Name: 'Racine Raiders',
                Logo: RaidersLogo
              },
              AwayTeam: {
                Name: 'Independent American Football League',
                Logo: null
              },
              Date: new Date('2018-09-25T15:00:00Z'),
              FinalScore: {
                HomeTeam: null,
                AwayTeam: null
              }
            }
          ]
        }
      });
    })
  }
}