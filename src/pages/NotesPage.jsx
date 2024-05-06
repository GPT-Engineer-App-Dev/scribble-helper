import { Box, Button, Input, VStack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addNote = () => {
    if (input.trim() === '') {
      toast({
        title: 'Cannot add empty note',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput('');
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Input
          placeholder="Type your note here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addNote} colorScheme="blue">Add Note</Button>
        {notes.map((note, index) => (
          <Text key={index} p={2} bg="gray.100" borderRadius="md">
            {note}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default NotesPage;