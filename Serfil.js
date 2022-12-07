import React, { useState } from "react";
import { Skeleton, Text, Button, Box, Image, VStack, Center, NativeBaseProvider } from "native-base";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Example = () => {
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");
  setTimeout(() => {
    setIsLoaded(true);
    setText("Este es nuestro correo de contacto para dudas o aclaraciones");
  }, 5000);
  return <Center w="100%">
      <Box w="90%" maxWidth="400">
        <VStack maxWidth="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
        borderColor: "coolGray.500"
      }} _light={{
        borderColor: "coolGray.200"
      }}>
          <Skeleton h="40" isLoaded={isLoaded}>
          <Image h="40" src={require("./img/contacto.png")}  />
          </Skeleton>
          <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
            <Text px="4" fontSize={"md"} lineHeight={"20px"}>
              {text}
            </Text>
          </Skeleton.Text>
          <Skeleton px="4" mb="4" rounded="md" startColor="primary.100" isLoaded={isLoaded}>
            <Button  onPress={() => navigation.navigate('Menú')} m="4">Regresar a Inicio</Button>
          </Skeleton>
        </VStack>
      </Box>
    </Center>;
};

export default Example;