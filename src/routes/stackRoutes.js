import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/home";
import { Detail } from "../pages/detail";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detalhes do Pokémon" }}
      />
    </Stack.Navigator>
  );
}
