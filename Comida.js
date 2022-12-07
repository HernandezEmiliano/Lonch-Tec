import React from "react";
import { Image, Center, NativeBaseProvider } from "native-base";

function Example() {
  const myRef = React.useRef(null);
  React.useEffect(() => {
    myRef.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5
    });
  }, [myRef]);
  return <Image ref={myRef} source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_LmTtGU2mvmGrpVUK49Thtv7JV0qIB92GA&usqp=CAU"
  }} alt="Alternate Text" size="xl" />;
}

   
export default Example;