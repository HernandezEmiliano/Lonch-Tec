import React from "react";
import { Menu, Divider, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Example() {
  const navigation = useNavigation();
  return (
  
  <Box w="70%" alignItems="right">
      <Menu closeOnSelect={false} w="190" onOpen={() => console.log("opened")} onClose={() => console.log("closed")} trigger={triggerProps => {
      return <Pressable {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.OptionGroup  title="Mas Opciones" type="radio">
          <Menu.ItemOption  onPress={() => navigation.navigate('Perfil')}  value="Arial">Mi Perfil</Menu.ItemOption>
          <Menu.ItemOption onPress={() => navigation.navigate('Reportar')} value="Nunito Sans">Reportar</Menu.ItemOption>
          <Menu.ItemOption onPress={() => navigation.navigate('Contacto')} value="Nunito Sans">Contacto</Menu.ItemOption>
          <Menu.ItemOption onPress={() => navigation.navigate('LonchTec')} value="Roboto">Cerrar Sesion</Menu.ItemOption>
        </Menu.OptionGroup>
       
      </Menu>
    </Box>
  );
    
};

    export default Example;