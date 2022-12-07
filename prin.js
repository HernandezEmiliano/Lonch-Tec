// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { Center, Image, NativeBaseProvider, Box, Heading, VStack, FormControl, Input, Link, Button, HStack } from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';


// const Example2 = () => {
//   return <Center w="100%">
//       <Box safeArea p="2" py="8" w="90%" maxW="290">
//         <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
//         color: "warmGray.50"
//       }}>
          
//         </Heading>
//         <Heading mt="1" _dark={{
//         color: "warmGray.200"
//       }} color="coolGray.600" fontWeight="medium" size="xs">
//           Iniciar Sesion
//         </Heading>

//         <VStack space={3} mt="5">
//           <FormControl>
//             <FormControl.Label>Correo</FormControl.Label>
//             <Input />
//           </FormControl>
//           <FormControl>
//             <FormControl.Label>Contraseña</FormControl.Label>
//             <Input type="password" />
//             <Link _text={{
//             fontSize: "xs",
//             fontWeight: "500",
//             color: "indigo.500"
//           }} alignSelf="flex-end" mt="1">
//               Olvidaste tu contraseña?
//             </Link>
//           </FormControl>
//           <Button mt="2" colorScheme="indigo">
//             Ingresar
//           </Button>
//           <HStack mt="6" justifyContent="center">
//             <Text fontSize="sm" color="coolGray.600" _dark={{
//             color: "warmGray.200"
//           }}>
//               Soy nuevo usuario.{" "}
//             </Text>
//             <Link _text={{
//             color: "indigo.500",
//             fontWeight: "medium",
//             fontSize: "sm"
//           }} href="#">
//               Ingresar
//             </Link>
//           </HStack>
//         </VStack>
//       </Box>
//     </Center>;
// };

// function Example() {
//   return (
//     <Center>
//       <Image src={require("./img/logo.png")} alt="Alternate Text" size="xl" /> 
//       </Center>
//   );
  
// }

// function Example3() {
//   return (
//       <Image source={{
//       uri: "https://wallpaperaccess.com/full/317501.jpg"
//     }} alt="Alternate Text" size="xl" /> 
    
//   );
  
// }

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: `#ffffff` }}>
//       <Text></Text>
//       <NativeBaseProvider>
//       <Example/>
//         <Example2/>
        
//       </NativeBaseProvider>

//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1 }}>
      
//       <NativeBaseProvider>
      
//       </NativeBaseProvider>
      
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <NativeBaseProvider>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//       <Button>Comidas</Button>
//       <br></br>
//       <br></br>
//       <Button>Bebidas</Button>
//       <br></br>
//       <br></br>
//       <Button>Postres</Button>
//       </NativeBaseProvider>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Login"
//         component={Feed}
//         options={{
//           tabBarLabel: 'Login',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Menú"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Menú',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Inicio"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Inicio',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
      
//         <MyTabs/>
      
      
      
//     </NavigationContainer>
    
//   );
// }

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
//       <Drawer.Screen
//         name="Feed"
//         component={Feed}
//         options={{ drawerLabel: 'Home' }}
//       />
//       <Drawer.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{ drawerLabel: 'Updates' }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={Profile}
//         options={{ drawerLabel: 'Profile' }}
//       />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Drawer"
//         onPress={() => navigation.navigate('Feed')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }


// const Drawer = createDrawerNavigator();

//  function MyDrawer() {
//    return (
//      <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
//        <Drawer.Screen
//          name="Feed"
//          component={Feed}
//          options={{ drawerLabel: 'Home' }}
//        />
//        <Drawer.Screen
//          name="Notifications"
//          component={Notifications}
//          options={{ drawerLabel: 'Updates' }}
//        />
//      <Drawer.Screen
//          name="Profile"
//          component={Profile}
//          options={{ drawerLabel: 'Profile' }}
//        />
//  </Drawer.Navigator>
//    )
//  }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer/>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Feed" component={MyDrawer} />
//         <MyDrawer/>
        
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.navigate('Perfil')} title="Go to perfil"/>
//     </View>
//   );
// }

// function Perfil({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="Perfil" component={Perfil} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, Heading, VStack, FormControl, Input, Link, HStack, Center, NativeBaseProvider, Image } from "native-base";

const Example = ({ navigation }) => {
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>

          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
         
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'  }}>
      <Text></Text>
      <NativeBaseProvider>
      <Center>
      <Image src={require("./img/logo.png")} alt="Alternate Text" size="xl" /> 
      </Center>
        <Example/>
        <Button
        title="Iniciar Sesion"
        onPress={() => navigation.navigate('Details')}
      />
      </NativeBaseProvider>
      
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      
       
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio de Sesion">
      
      <Stack.Screen name="Inicio de Sesion" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        
        
     

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
