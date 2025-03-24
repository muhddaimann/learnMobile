import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  Home,
  PaintBucket,
  Laugh,
  Clapperboard,
  Shapes,
  Cloud,
  Settings,
} from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function TabLayout() {
  const theme = useTheme();

  const getIcon = (routeName: string) => {
    switch (routeName) {
      case 'index':
        return Home;
      case 'color':
        return PaintBucket;
      case 'meme':
        return Laugh;
      case 'movie':
        return Clapperboard;
      case 'trivia':
        return Shapes;
      case 'weather':
        return Cloud;
      case 'settings':
        return Settings;
      default:
        return Home;
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={['top', 'left', 'right']}
    >
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            height: hp('10%'),
            borderTopLeftRadius: hp('3%'),
            borderTopRightRadius: hp('3%'),
            borderTopWidth: 0,
            overflow: 'hidden',
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.outline,
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = getIcon(route.name);
            return (
              <View style={{ alignItems: 'center' }}>
                {focused && (
                  <View
                    style={{
                      height: 4,
                      width: 20,
                      borderRadius: 2,
                      backgroundColor: theme.colors.primary,
                      marginBottom: 4,
                    }}
                  />
                )}
                <Icon size={focused ? size + 2 : size} color={color} />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 2,
          },
        })}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="color" options={{ title: 'Color' }} />
        <Tabs.Screen name="meme" options={{ title: 'Meme' }} />
        <Tabs.Screen name="movie" options={{ title: 'Movie' }} />
        <Tabs.Screen name="trivia" options={{ title: 'Trivia' }} />
        <Tabs.Screen name="weather" options={{ title: 'Weather' }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      </Tabs>
    </SafeAreaView>
  );
}
