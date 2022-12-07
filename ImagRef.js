import React from "react";
import { Checkbox, Heading, HStack, VStack, Text, Box, Center, NativeBaseProvider, Image } from "native-base";
import { onChange } from "react-native-reanimated";

const Example = () => {
  const [groupValue, setGroupValue, value] = React.useState([]);

  const getSelectedGroupValue = () => {
    if (groupValue.length === 0) return "[]";
    let arrayString = groupValue.reduce((accumulator, currentValue) => accumulator + ", " + currentValue);

    if (arrayString === "Fresca" )  {
      return "[" + arrayString + " Con un total de : $ 19 pesos]";
    }else{
      if (arrayString === "Coca-Cola" )  {
        return "[" + arrayString + " --->Con un total de : $ 19 pesos]";
      }else{
        if (arrayString === "Agua" )  {
          return "[" + arrayString + " --->Con un total de : $ 15 pesos]";
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
      <Heading mt={3}>Escoge tu bebida: </Heading>
    </HStack>
    <Checkbox.Group colorScheme="green" defaultValue={groupValue} onChange={values => {
      setGroupValue(values || []);
    }}>
      <Image alt="Alternate Text" size="xl" source={{
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhFmS-0nNWJpH2_eIJ3lZrc-p90agPfW8oQ&usqp=CAU"
    }}  /> 
      <Checkbox value="Fresca" my={1}>
      Fresca--600ml--$19
      </Checkbox>
      <Image alt="Alternate Text" size="xl" source={{
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkKPyV73jDXpu3i64pQFHcBrIFgXEhctNxQ&usqp=CAU"
    }}  />
      <Checkbox value="Coca-Cola" my={1}>
      Coca-Cola --600ml--$19
      </Checkbox>
      <Image alt="Alternate Text" size="xl" source={{
      uri: "data:image/jpeg;base64,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"
    }}  />
      <Checkbox value="Agua" my={1}>
        Agua -1L--$15
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
