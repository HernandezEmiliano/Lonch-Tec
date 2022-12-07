import React from "react";
import { Button, useToast, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  const toast = useToast();
  return <Center>
      <Button onPress={() => {
      toast.show({
        render: () => {
          return <Box bg="emerald.100" px="2" py="1" rounded="sm" mb={5}>
                 Datos guardados con exito!
                </Box>;
        }
      });
    }}>
        Guardar Datos
      </Button>
    </Center>;
};

export default Example;