import React from "react";
import {Image, Center, Text} from 'native-base';


function Ima() {
    return (
    
       <Center>
       <Image size={150} resizeMode={"contain"} borderRadius={100} 
        src={require("../img/logo.png")} alt="Alternate Text" />
      </Center>
      );
  }

export default Ima;