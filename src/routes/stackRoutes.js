import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/home";
import { Detail } from "../pages/detail";

const Stack = createStackNavigator();

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
