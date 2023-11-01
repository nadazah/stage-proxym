import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Button,
	Flex
} from '@chakra-ui/react';
import MyButton from './MyButton';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 


const SessionsManagement = (): JSX.Element => {
	// const handleDelete = (id) => {
  //   const updatedSessionsData = sessionsData.filter((session) => session.id !== id);
  //   setSessionsData(updatedSessionsData);
  // }
  const sessionsData = useSelector((state) => state.session.data);

	console.log({ sessionsData });
	

	return (
		<>
			<TableContainer>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>Intitulé</Th>
							<Th>Date de début</Th>
							<Th>Date de fin</Th>
							<Th>Postulation</Th>
							<Th>Stagiaires Entretenus</Th>
							<Th>Stagiaires validés</Th>
							<Th>Sujets</Th>
							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{sessionsData.map((session, index) => (
							<Tr key={`index${index}`}>
								<Td>{session.intit}</Td>
								<Td>{session.debut}</Td>
								<Td>{session.fin}</Td>
								<Td>{session.Postulation}</Td>
								<Td>{session.StagiairesEntretenus}</Td>
								<Td>{session.Stagiairesvalidés}</Td>
								<Td>{session.Sujets}</Td>
								<Td>
									<MyButton id={index} postulationCount={session.Postulation} />
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Flex justifyContent='flex-end' py='5'>
				<Button as={RouterLink} to={'add'} colorScheme='purple' variant='solid' width='fit-content'>
					Ajouter une nouvelle session
				</Button>
			</Flex>
		</>
	)

}

export default SessionsManagement;
