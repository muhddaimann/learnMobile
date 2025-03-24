import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Home, Settings } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function TabLayout() {
  const theme = useTheme();

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
          tabBarInactiveTintColor: theme.colors.onSurface,
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = route.name === 'index' ? Home : Settings;
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
        <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      </Tabs>
    </SafeAreaView>
  );
}
