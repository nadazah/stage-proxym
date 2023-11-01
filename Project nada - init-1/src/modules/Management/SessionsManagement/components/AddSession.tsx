import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Box,
  Center,
  Flex
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../redux/session.slice';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../utils/date'; 

function AddSession() {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  const sessionsData = useSelector((state) => state.session.data);

  const id = sessionsData[sessionsData.length - 1].id + 1

  console.log({ id });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      id,
      [name]: ['debut', 'fin'].includes(name) ? formatDate(value) : value,
      Postulation: 0,
      StagiairesEntretenus: 0,
      Stagiairesvalidés: 0,
      Sujets: 0
    }));
  };

  const handleSubmit = (e) => {
    console.log('submitted');
    e.preventDefault();
    dispatch(saveFormData(formData));
  };




  return (
    <>
      <Center mt={20}>
        <Box border='1px' borderColor='gray.200' borderRadius="md" boxShadow='base' p='6' rounded='md' bg='white' w={1450}>
          <form onSubmit={handleSubmit}>
            <FormControl pr={40} pl={55} pt={10} >
              <FormLabel>Intitulé</FormLabel>
              <Input width="250px" mb={5} name="intit"
                value={formData.intit || ''} onChange={handleChange} />
              <Flex justifyContent='space-between'>
                <Box>
                  <FormLabel>Date de début</FormLabel>
                  <Input
                    placeholder="Select Date and Time" width="250px" name="debut"
                    value={formData.debut || ''} onChange={handleChange}
                    size="md"
                    type="datetime-local" />
                </Box>
                <Box>
                  <FormLabel>Date de fin</FormLabel>
                  <Input
                    placeholder="Select Date and Time" width="250px" name="fin"
                    value={formData.fin || ''} onChange={handleChange}
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
                    value={formData.description || ''} onChange={handleChange} />
            </FormControl>
            <Flex justifyContent="center" >
              <Button type='submit' colorScheme='purple' variant='solid' mt={9} lineHeight='normal'>
                Valider
              </Button>
            </Flex>
          </form>

        </Box>
      </Center>
    </>
  )
}

export default AddSession