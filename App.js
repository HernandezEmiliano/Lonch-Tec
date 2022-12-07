import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import InicioSesion from './MyScreens/InicioSesion';
import MenuInicio from './MyScreens/MenuInicio';
import Botones from './MyScreens/Botones';
import Usuario from './MyScreens/Usuario';
import Comida from './MyScreens/Comida';
import RowComida from './MyScreens/RowComida';
import FinPedido from './MyScreens/FinPedido';
import Mensaje from './MyScreens/Mensaje';
import ImagComida from './MyScreens/ImagComida'; 
import ImagRef from './MyScreens/ImagRef';
import ImagPos from './MyScreens/ImagPos';
import menuIni from './MyScreens/menuIni';
import mensajeSesion from './MyScreens/mensajeSesion';
import MensajeS from './MensajeS';
import MenInicio from './MenInicio';
import Spiner from './MyScreens/Spiner';
import Ava from './Ava';
import Serfil from './Serfil';
import Reportar from './Reportar';
import HeadPerfil from './HeadPerfil';
import MenRep from './MenRep';
import ConfP from './ConfP';
import Datos from './Datos';
import DatoR from './DatoR';

import { Box, Heading, VStack, FormControl, Input, Link, HStack, Avatar, Center, NativeBaseProvider, Image } from "native-base";


import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Example() {
  return 
  (
  <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Group title="Free">
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
        </Menu.Group>
        <Divider mt="3" w="100%" />
        <Menu.Group title="Paid">
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
        </Menu.Group>
      </Menu>
    </Box>
  );
}

function HomeScren({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      
      <NativeBaseProvider>
        
      <Image src={require("./img/lo.png")}  width={"326"} height={"461"}/> 
      <br></br>
      <br></br>
      <Spiner/>
      <br></br>
      <Button
      
        title="Continuar"
        onPress={() => navigation.navigate('Iniciar Sesion')}
      />
      </NativeBaseProvider>
      
      
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: `#fffacd` }}>
      <NativeBaseProvider>
      <Ava />
      <MenInicio alignItems="left" />
        <Center>
        <NativeBaseProvider>
          
            <Center flex={1} px="3">
              
            
                <Mensaje />
            </Center>
          </NativeBaseProvider>
          
        <MenuInicio/>
        <h1>Menú</h1>

        
        
        <Button size="sm" variant="ghost" onPress={() => navigation.navigate('Comidas')} title="Comidas"/>
        <br></br>
        <Button size="sm" variant="ghost" onPress={() => navigation.navigate('Bebidas')} title="Bebidas"/>
        <br></br>
        <Button size="sm" variant="ghost" onPress={() => navigation.navigate('Postres')} title="Postres"/>
        
        </Center>
        
            
        
      </NativeBaseProvider>
      

    </View>
  );
}

function DetailsScren({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: `#000000` }}>
      
      <NativeBaseProvider>
      <MensajeS />
      <Center flex={1} px="1">
                
        </Center>
      <Center>
      
       <Image src={require("./img/logo.png")} alt="Alternate Text" size="xl" /> 
       </Center>
        <InicioSesion/>
        
      </NativeBaseProvider>
    </View>
  );
}

function Comidas({ navigation }) {
  return (
    <View style={{ backgroundColor: `#fffacc`}}>
       
       <NativeBaseProvider>
            <Center flex={1} px="200">
              
              
            <Center flex={1} px="0.5">
            <ImagComida/>
            </Center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              <FinPedido/>
              <br></br>
              
            <Button 
        onPress={() => navigation.navigate('Menú')}
        title="Regresar a Inicio"
        
      />
      
            </Center>
          </NativeBaseProvider>
              
          
      
    </View>
  );
}

function Bebidas({ navigation }) {
  return (
    <View style={{ backgroundColor: `#f4a460`}}>
     <NativeBaseProvider>
     <Center flex={1} px="200">
              
              
              <Center flex={1} px="0.5">
      <ImagRef/>
      </Center>
      <br></br>
              <FinPedido/>
              <br></br>
     <Button
        onPress={() => navigation.navigate('Menú')}
        title="Regresar a Inicio"
      />
      </Center>
     </NativeBaseProvider>
     
    </View>
  );
}

function Perfil({ navigation }) {
  return (
    <View style={{ backgroundColor: `#f4a460`}}>
     <NativeBaseProvider>
     <Center flex={1} px="200">
              
              
              <Center flex={1} px="0.5">
      <ImagRef/>
      </Center>
      <br></br>
              <FinPedido/>
              <br></br>
     <Button
        onPress={() => navigation.navigate('Menú')}
        title="Regresar a Inicio"
      />
      </Center>
     </NativeBaseProvider>
     
    </View>
  );
}

function Contacto({ navigation }) {
  return (
    <View style={{ flex:1, backgroundColor: `#fffafa`}}>
     <NativeBaseProvider>
      <br></br>
      <br></br>
     <Serfil />
     </NativeBaseProvider>
     
    </View>
  );
}

function ConfPe({ navigation }) {
  return (
    <View style={{ flex:1, backgroundColor: `#fffafa`,alignItems: 'center', justifyContent: 'center'}}>
     <NativeBaseProvider>
      <br></br>
      <br></br>
     <ConfP />
     <br></br>
     <Button
      
        title="Editar foto"
        
      />
      <br></br>
      <Datos />
      <br></br>
      <DatoR />
     </NativeBaseProvider>
     
    </View>
  );
}

function Report({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor: `#f0e68c`, alignItems: 'center', justifyContent: 'center'}}>
     <NativeBaseProvider>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <Center>
        <HeadPerfil />
        <br></br>
        <Reportar />
        <br></br>
        <br></br>
        <MenRep />
        <br></br>
        <br></br>
        <Button 
        onPress={() => navigation.navigate('Menú')}
        title="Regresar a Inicio"
        
      />
      
      </Center>
     </NativeBaseProvider>
     
    </View>
  );
}

function Postres({ navigation }) {
  return (
    <View style={{ backgroundColor: `#eee8aa` }}>
     
        
        <NativeBaseProvider>
        <Center flex={1} px="200">
          <ImagPos />
        
        <br></br>
        <br></br>

        <br>
        </br>
       <FinPedido/>
       <br></br>
      <Button
        onPress={() => navigation.navigate('Menú')}
        title="Regresar a Inicio"
      />
      </Center>
      </NativeBaseProvider>
     
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="LonchTec" component={HomeScren} />
        <Stack.Screen name="Iniciar Sesion" component={DetailsScren} />
        <Stack.Screen name="Menú" component={NotificationsScreen} />
        <Stack.Screen name="Comidas" component={Comidas} />
        <Stack.Screen name="Bebidas" component={Bebidas} />
        <Stack.Screen name="Postres" component={Postres} />
        <Stack.Screen name="Mi Perfil" component={Perfil} />
        <Stack.Screen name="Reportar" component={Report} />
        <Stack.Screen name="Contacto" component={Contacto} />
        <Stack.Screen name="Perfil" component={ConfPe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;