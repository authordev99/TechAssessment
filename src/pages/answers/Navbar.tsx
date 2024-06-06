import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Calculator from './Calculator.tsx';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { useRoute } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export default function Navbar() {
  const menu = [
    'Showcase',
    'Docs',
    'Blogs',
    'Analytics',
    'Commerce',
    'Template',
    'Enterprise',
  ];

  const Screen = () => {
    const route = useRoute();
    return (
      <View style={styles.screenContainer}>
        <Text>{`${route.name} Screen`}</Text>
      </View>
    );
  };

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView>
        <TextInput
          placeholder={'Search documentation'}
          style={styles.textInputSearch}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={'AEON'} component={Calculator} />
      {menu.map(item => (
        <Drawer.Screen name={item} component={Screen} />
      ))}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  textInputSearch: {
    padding: 12,
    margin: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
