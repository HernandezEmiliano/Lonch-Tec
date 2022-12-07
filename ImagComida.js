import React from "react";
import { Checkbox, Heading, HStack, VStack, Text, Box, Center, NativeBaseProvider, Image } from "native-base";
import { onChange } from "react-native-reanimated";


const Example = () => {

  

  const [groupValue, setGroupValue] = React.useState([]);
  const [suma, setSuma] = React.useState([]);
  const [nm, setNm] = React.useState([]);

  
  
  const getSelectedGroupValue = () => {
    if (groupValue.length === 0) return "[]";
    let arrayString = groupValue.reduce((accumulator, currentValue) => accumulator + ", " + currentValue);
    
    if (arrayString === "Pizza" )  {
      return "[" + arrayString + " Con un total de : $ 27 pesos]";
    }else{
      if (arrayString === "Pizza" )  {
        return "[" + arrayString + " --->Con un total de : $ 27 pesos]";
      }else{
        if (arrayString === "Torta" )  {
          return "[" + arrayString + " --->Con un total de : $ 30 pesos]";
        }else{
          if (arrayString === "Hamburguesa" )  {
            return "[" + arrayString + " --->Con un total de : $ 45 pesos]";
          }else{
            if (arrayString != "Pizza" || arrayString !="Torta" )  {
              return "[" + arrayString + " Con un total de : $ 57 pesos]";
            }else{
              if (arrayString === "Pizza" || arrayString ==="Hamburguesa" )  {
                return "[" + arrayString + " Con un total de : $ 72 pesos]";
              }
            }
          }
        }
      }
    }
    
  };




  return <Box display="flex" justifyContent="space-between" alignItems="center">
    <HStack mb={3} alignItems="baseline">
      <Heading mt={3}>Escoge tu comida: </Heading>
    </HStack>
    <Checkbox.Group colorScheme="green" defaultValue={groupValue} onChange={values => {
      setGroupValue(values || []);
    }}>
      <Image size={150} borderRadius={100} source={{
      uri: "data:image/jpeg;base64,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"
    }} alt="Alternate Text" /> 
      <Checkbox value="Hamburguesa" my={1}>
      Hamburguesa--$45
      </Checkbox>
      <Image size={150} borderRadius={100} source={{
      uri: "data:image/jpeg;base64,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"
    }} alt="Alternate Text" />
      <Checkbox value="Pizza" my={1}>
        Pizza--$27
      </Checkbox>
      <Image size={150} borderRadius={100} source={{
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO3T2mQIzityLA7hLCW9Z-kgikiQhVylADw&usqp=CAU"
    }} alt="Alternate Text" />
      <Checkbox value="Torta" my={1}>
        Torta--$30
      </Checkbox>
      
    </Checkbox.Group>
    <VStack mt={3}>
      <Box>
        <Text fontSize="md">Haz seleccionado una: </Text>
        <Text fontSize="md" bold>

          {getSelectedGroupValue()}


        </Text>

      </Box>

    </VStack>

  </Box>;
};


export default Example;