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


function EditSession() {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<IReduxSession.ISession >({
    id: '0',
		intit: '',
		debut: '22/07/1996',
		fin: '22/07/1996',
		Postulation: '',
		StagiairesEntretenus: '',
		Stagiairesvalidés: '',
		Sujets: '',
		description: '',
  });

  const  sessionsData = useAppSelector((state) => state.session.data)

  const id = sessionsData[sessionsData.length - 1].id + 1;

  const { sessionId } = useParams();

  const sessionToEdit = sessionsData.filter(session => session.id === sessionId)[0]


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      id: sessionId ? sessionId : id,
      [name]: ['debut', 'fin'].includes(name) ? formatDate(value) : value,
      Postulation: sessionToEdit.Postulation,
      StagiairesEntretenus: sessionToEdit.StagiairesEntretenus,
      Stagiairesvalidés: sessionToEdit.Stagiairesvalidés,
      Sujets: sessionToEdit.Sujets
    }));
  };

  console.log(formData)

  

  console.log({ sessionToEdit, sessionsData, formData });

  useEffect(() => {
    setFormData(sessionToEdit)
  }, [])

  //hathom jdod louta
  const handleUpdate = (e) => {
    // Call the async thunk to update the row with the updated data
    e.preventDefault();
    dispatch(updateRow({ rowId:sessionId, formData }));
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
              <Button type='submit'  colorScheme='purple' variant='solid' mt={9} lineHeight='normal'>
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