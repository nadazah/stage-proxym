import { gql } from '@apollo/client';

export const getAllSessionsQuery = gql`
  query  {
    sessions {
      id
      intit
      debut
      fin
      postulation
      stagiairesentretenus
      stagiairesvalides
      sujets
      description
    }
  }
`;

export const GET_SESSION_BY_ID = gql`
  query GetSessionById($id: String!) {
    session(id: $id) {
      id
      intit
      debut
      fin
      postulation
      stagiairesentretenus
      stagiairesvalides
      sujets
      description
    }
  }
`;

export const createSessionMutation = gql`
  mutation createSession($session: CreateSessionDto!) {
    ajouterSession(nouvelleSession: $session) {
      intit
      debut
      fin
      postulation
      stagiairesentretenus
      stagiairesvalides
      sujets
      description
    }
  }
`;

export const updateSessionMutation = gql `
  mutation updateSession($id: String!, $session: UpdateSessionDto!) {
    editerSession(id: $id, sessionEditee: $session) {
      id
      intit
      debut
      fin
      postulation
      stagiairesentretenus
      stagiairesvalides
      sujets
      description
    }
  }
`;

export const deleteSessionMutation = gql `
  mutation deleteSession($id: String!) {
    supprimerSession(id: $id) {
      id
    }
  }
`;

// export const SessionFragment = gql `
//   fragment SessionItem on Session {
//    id
//    intit
//    debut
//    fin
//    postulation
//    stagiairesentretenus
//    stagiairesvalides
//    sujets
//    description
//   }
// `;
