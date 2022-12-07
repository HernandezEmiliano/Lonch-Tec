import React from "react";
import { Input, Stack, Center, NativeBaseProvider,FormControl } from "native-base";

const Example = () => {
  return <Stack space={4} w="75%" maxW="300px" mx="auto">
      
       <FormControl.Label>Correo:</FormControl.Label>
      <Input variant="underlined" placeholder="Cambiar correo" />
       <FormControl.Label>Password:</FormControl.Label>
      <Input variant="underlined" placeholder="Cambiar Conraseña" />
       <FormControl.Label>Telefono:</FormControl.Label>
      <Input variant="underlined" placeholder="Agregar Telefono" />
      
    </Stack>;
};

export default Example;