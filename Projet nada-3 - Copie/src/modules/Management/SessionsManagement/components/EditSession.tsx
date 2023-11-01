import { useState, useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Center,
  Flex
} from '@chakra-ui/react';
import { updateRow } from '../redux/session.slice';
import { useAppSelector } from 'hooks/useAppSelector';
import { formatDate, reverseFormatDate } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import { IReduxSession } from '../interface/session';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_SESSION_BY_ID, updateSessionMutation } from '../graphQL/session_queries';



function EditSession() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const  sessionsData = useAppSelector((state) => state.session.data)
  const { sessionId } = useParams();

  const { loading, data } = useQuery(GET_SESSION_BY_ID, {
    variables: { id: sessionId },
  });
  const [updateSession] = useMutation(updateSessionMutation);

  const [formData, setFormData] = useState<IReduxSession.ISession >({
    id: '',
		intit: '',
		debut: '22/07/1996',
		fin: '22/07/1996',
		postulation: '',
		stagiairesentretenus: '',
		stagiairesvalides: '',
		sujets: '',
		description: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: ['debut', 'fin'].includes(name) ? formatDate(value) : value,
    }));
  };


 

  useEffect(() => {
    if (!loading && data) {
      setFormData(data.session);
    }
  }, [loading, data]);
   
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
  console.log({ sessionsData, formData, sessionId});
  console.log({formDataa})

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await updateSession({
      variables: {
        id: sessionId,
        session: formDataa,
      },
    });
    console.log("Mutation response:", response);
    navigate('/private/admin/sessions-management');
    dispatch(updateRow({ rowId: sessionId, formData: [response.data.updateSession.session] }));
  };



  return (
    <>
      <Center mt={20}>
        <Box border='1px' borderColor='gray.200' borderRadius="md" boxShadow='base' p='6' rounded='md' bg='white' w={1450}>
          <form onSubmit={handleUpdate}>
            <FormControl pr={40} pl={55} pt={10} >
              <FormLabel>Intitulé</FormLabel>
              <Input width="250px" mb={5} name="intit"
                value={Object.keys(formData).length !== 0 && formData.intit || ''} onChange={handleChange} />
              <FormLabel>Postulation</FormLabel>
              <Input width="250px" mb={5} name="postulation"
                value={Object.keys(formData).length !== 0 && formData.postulation || ''} onChange={handleChange} /> 
              <Flex justifyContent='space-between'>
                <Box>
                  <FormLabel>Date de début</FormLabel>
                  <Input
                    placeholder="Select Date and Time" width="250px" name="debut"
                    value={Object.keys(formData).length !== 0 && reverseFormatDate(formData?.debut) || ''} onChange={handleChange}
                    size="md"
                    type="datetime-local" />
                </Box>
                <Box>
                  <FormLabel>Date de fin</FormLabel>
                  <Input
                    placeholder="Select Date and Time" width="250px" name="fin"
                    value={Object.keys(formData).length !== 0 && reverseFormatDate(formData?.fin) || ''} onChange={handleChange}
                    size="md"
                    type="datetime-local" />
                </Box>
              </Flex>
              <FormLabel>Stagiaires Entretenus</FormLabel>
              <Input width="250px" mb={5} name="stagiairesentretenus"
                value={Object.keys(formData).length !== 0 && formData.stagiairesentretenus || ''} onChange={handleChange} />
              <FormLabel>Stagiaires validés</FormLabel>
              <Input width="250px" mb={5} name="stagiairesvalides"
                value={Object.keys(formData).length !== 0 && formData.stagiairesvalides || ''} onChange={handleChange} />
              <FormLabel>Sujets</FormLabel>
              <Input width="250px" mb={5} name="sujets"
                value={Object.keys(formData).length !== 0 && formData.sujets || ''} onChange={handleChange} />
              <FormLabel mt={5}>Visuel</FormLabel>
              <Input
                placeholder="Select Date and Time" width="250px" mb={5} height="auto" p={0}
                size="md"
                type="file" />
              <FormLabel>PFE Book</FormLabel>
              <Input
                placeholder="Select Date and Time" width="250px" mb={5} height="auto" p={0}
                size="md"
                type="file" />
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Here is a sample placeholder' name="description"
                value={Object.keys(formData).length !== 0 && formData.description || ''} onChange={handleChange} />
            </FormControl>
            <Flex justifyContent="center" >
            <Button onClick={handleUpdate} colorScheme='purple' variant='solid' mt={9} lineHeight='normal'>
      Valider
    </Button>
            </Flex>
          </form>

        </Box>
      </Center>
    </>
  )
}

export default EditSession