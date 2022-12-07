

import * as React from 'react';
import { Button, View, Text , Alert} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, Heading, VStack, FormControl, Input, Link, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebase-config';
import App from '../App';

const Login = ({ }) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();
  const mostrarAlerta=()=>{
    alert("Esta es una alerta");
  }
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user;
        console.log(user)
        
      }) 
      {
        alert('Contraseña incorrecta')
      }
        
      

  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Sign In created!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Menú')
      })
        Alert.alert('Contraseña incorrecta');
       
      
  }
  return <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.100" _dark={{
        color: "warmGray.50"
      }}>

        Bienvenido Alumno/Docente/ Personal del ITA
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">

      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input backgroundColor={'#fff'} onChangeText={(text) => setEmail(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input backgroundColor={'#fff'} onChangeText={(text) => setPassword(text)} type="password" />
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button onPress={handleSignIn} onClick={()=>mostrarAlerta()} mt="2" colorScheme="indigo" title="Iniciar Sesion" />
           
          <Button onPress={handleCreateAccount} mt="2" colorScheme="indigo" title="Crear cuenta" />
           

      </VStack>
    </Box>
  </Center>;
};

export default Login;


