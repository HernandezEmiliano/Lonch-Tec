import React, { useState } from "react";
import { TextArea, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  return <Box  alignItems="center" w="80%" >
      <TextArea value={textAreaValue} onChange={e => setTextAreaValue(e.currentTarget.value)} // for web
    onChangeText={text => setTextAreaValue(text)} // for android and ios
    w="2000%" maxW="300" />
    </Box>;
};

export default Example;