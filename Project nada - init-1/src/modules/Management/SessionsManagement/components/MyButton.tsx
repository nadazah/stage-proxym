import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteRow } from '../redux/session.slice';
import { Link as RouterLink } from 'react-router-dom';

const MyButton = ({ postulationCount, id }) => {
  // const handleDeleteButtonClick = () => {
  //   // console.log('supprimer')
  //   onDeleteRow(id);
  // }


    const dispatch = useDispatch();
  
    const handleDelete = () => {
      // Appeler l'async thunk pour supprimer la ligne
      dispatch(deleteRow(id));
    };
  

    return (
      <>
        {postulationCount === 0 ? (
          <>
            <Button colorScheme='purple' variant='link' as={RouterLink} to={'edit'}>
              Editer
            </Button>
            |
            <Button colorScheme='purple' variant='link' onClick={handleDelete}>
              Supprimer
            </Button>
          </>
        ) : (
          <Button colorScheme='purple' variant='link'  as={RouterLink} to={`edit/${id}`}>
            Editer
          </Button>
        )
        }
      </>
    )
  };
  export default MyButton;