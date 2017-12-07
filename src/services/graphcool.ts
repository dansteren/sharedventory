export const query = (graphqlQuery: string) => {
  return new Promise<QueryResult>(resolve => {
    if (graphqlQuery.indexOf('asdf') === -1) {
      resolve({
        data: 'Fail',
        errors: [
          {
            message: 'I made your request fail, muwahaha',
            locations: [{ line: 1, column: 1 }]
          }
        ]
      });
    }
    resolve({
      id: '5c0105oucja1k9knt26nrlyng',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTQ5NjExMjksasdf'
    });
  });
};

interface Location {
  line: number;
  column: number;
}

interface Error {
  message: string;
  locations: Location[];
}

export interface QueryResult {
  errors?: Error[];
  [key: string]: any; //tslint:disable-line
}
