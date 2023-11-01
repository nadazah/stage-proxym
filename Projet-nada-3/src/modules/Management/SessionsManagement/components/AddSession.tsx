import { useState } from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	Box,
	Center,
	Flex,
} from '@chakra-ui/react';
import { saveFormData } from '../redux/session.slice';
// import { reverseFormatDate } from '../../../../utils/date';
import { IReduxSession } from '../interface/session.d';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { createSessionMutation } from '../graphQL/session_queries';

function AddSession() {

	const dispatch = useAppDispatch();
    const navigate = useNavigate();
	const [formData, setFormData] = useState<IReduxSession.ISession >({
		id: '0',
		intit: '',
		debut: '',
		fin: '',
		postulation: '',
		stagiairesentretenus: '',
		stagiairesvalides: '',
		sujets: '',
		description: '',
	});
	const [createSession] = useMutation(createSessionMutation);
	const sessionsData = useAppSelector((state) => state.session.data)

	const id = sessionsData[sessionsData.length - 1].id + 1;

	console.log({ id });
	

	const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      
      [name]: ['debut', 'fin'].includes(name) ? (value) : value,
    }));
  };
    const formDataa = {
		intit: formData.intit,
		debut: formData.debut,
		fin: formData.fin,
		postulation: formData.postulation,
		stagiairesentretenus: formData.stagiairesentretenus,
		stagiairesvalides: formData.stagiairesvalides,
		sujets: formData.sujets,
		description: formData.description,
	}; 

	console.log({ sessionsData, formData, formDataa });

    const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const { data } = await createSession({
           variables: { session: formDataa },
         });
         dispatch(saveFormData(data.createSession));
         navigate('/private/admin/sessions-management');
        } catch (error) {
         console.error('Error creating session:', error);
        }
    };

	return (
		<>
			<Center mt={20}>
				<Box
					border='1px'
					borderColor='gray.200'
					borderRadius='md'
					boxShadow='base'
					p='6'
					rounded='md'
					bg='white'
					w={1450}>
					<form onSubmit={handleSubmit}>
						<FormControl pr={40} pl={55} pt={10}>
							<FormLabel>Intitulé</FormLabel>
							<Input
								width='250px'
								mb={5}
								name='intit'
								value={formData.intit || ''}
								onChange={handleChange}
							/>
							<FormLabel>Postulation</FormLabel>
							<Input
								width='250px'
								mb={5}
								name='postulation'
								value={formData.postulation || ''}
								onChange={handleChange}
							/>
							<Flex justifyContent='space-between'>
								<Box>
									<FormLabel>Date de début</FormLabel>
									<Input
										placeholder='Select Date and Time'
										width='250px'
										name='debut'
										value={formData.debut}
										onChange={handleChange}
										size='md'
										type='datetime-local'
									/>
								</Box>
								<Box>
									<FormLabel>Date de fin</FormLabel>
									<Input
										placeholder='Select Date and Time'
										width='250px'
										name='fin'
										value={formData.fin || ''}
										onChange={handleChange}
										size='md'
										type='datetime-local'
									/>
								</Box>
							</Flex>
							<FormLabel>Stagiaires Entretenus</FormLabel>
							<Input
								width='250px'
								mb={5}
								name='stagiairesentretenus'
								value={formData.stagiairesentretenus || ''}
								onChange={handleChange}
							/>
							<FormLabel>Stagiaires validés</FormLabel>
							<Input
								width='250px'
								mb={5}
								name='stagiairesvalides'
								value={formData.stagiairesvalides || ''}
								onChange={handleChange}
							/>
							<FormLabel>Sujets</FormLabel>
							<Input
								width='250px'
								mb={5}
								name='sujets'
								value={formData.sujets || ''}
								onChange={handleChange}
							/>
							<FormLabel mt={5}>Visuel</FormLabel>
							<Input
								placeholder='Select Date and Time'
								width='250px'
								mb={5}
								height='auto'
								p={0}
								size='md'
								type='file'
							/>
							<FormLabel>PFE Book</FormLabel>
							<Input
								placeholder='Select Date and Time'
								width='250px'
								mb={5}
								height='auto'
								p={0}
								size='md'
								type='file'
							/>
							<FormLabel>Description</FormLabel>
							<Textarea
								placeholder='Here is a sample placeholder'
								name='description'
								value={formData.description || ''}
								onChange={handleChange}
							/>
						</FormControl>
						<Flex justifyContent='center'>
							<Button
								type='submit'
								colorScheme='purple'
								variant='solid'
								lineHeight='normal'  onClick={handleSubmit}>
								Valider
							</Button>
						</Flex>
					</form>
				</Box>
			</Center>
		</>
	);
}

export default AddSession;
