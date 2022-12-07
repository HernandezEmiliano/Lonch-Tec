import React from "react";
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  const [service, setService] = React.useState("");
  return (
  <Center>
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Escoge el tiempo" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="20 min" value="ux" />
          <Select.Item label="30 min" value="web" />
          <Select.Item label="40 min" value="cross" />
          <Select.Item label="50 min" value="ui" />
          <Select.Item label="60 min" value="backend" />
        </Select>
      </Box>
    </Center>
    
  );
}

export default Example;
    