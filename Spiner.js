import React from "react";
import { Spinner, HStack, Heading, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        LonchTec
      </Heading>
    </HStack>;
};

export default Example;