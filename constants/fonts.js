import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@expo-google-fonts/poppins/Poppins_400Regular.ttf"),
    "Poppins-Bold": require("@expo-google-fonts/poppins/Poppins_700Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return fontsLoaded;
};

export default useCustomFonts;
