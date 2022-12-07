import React from "react";
import { Button, Modal, Stack, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";
import Horario from './Horario';
import MensajeWhats from './MensajeWhats';
import Toast from './Toast';


const Example = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return <>
      <Stack direction={{
      base: "column",
      md: "row"
    }} space={2}>
       
        <Button onPress={() => openModal("right")}>Hacer Pedido</Button>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Para finalizar tu pedido ingresa los datos</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Telefono</FormControl.Label>
              <Input />
            </FormControl>
           
            <NativeBaseProvider>
            <FormControl>
              <FormControl.Label>En cuanto tiempo quieres tu pedido</FormControl.Label>
              <Horario />
            </FormControl>
                
            
          </NativeBaseProvider>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setOpen(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => { setOpen(false);
            }}>
               <NativeBaseProvider>
            <Center flex={1} px="3">
                <Toast  />
            </Center>
          </NativeBaseProvider>
              </Button>
             
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>;
}



const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
};

export default Example;