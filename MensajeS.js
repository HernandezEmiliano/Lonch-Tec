import React from "react";
import { Alert, Collapse, Button, VStack, HStack, IconButton, CloseIcon, Box, Text, Center, NativeBaseProvider } from "native-base";

function Example() {
  const [show, setShow] = React.useState(true);
  return (
  
  <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert maxW="400" status="error">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGreen.800"
              }}>
                  Instrucciones para crear una cuenta!
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGreen.800"
            }} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="6" _dark={{
            _text: {
              color: "coolGreen.600"
            }
          }}>
              
              -Ingresa un correo
              <br></br>
              -Contraseña con mas de 6  caracteres
              <br></br>
              -Dar click en crear cuenta
              <br></br>
              -Inicia Sesion
            </Box>
          </VStack>
        </Alert>
      </Collapse>
      
    </Box>
  );
}

export default Example;