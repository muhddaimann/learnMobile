import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Switch, Text, useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useToggle } from '@/contexts/themeContext';

export default function Settings() {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useToggle();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>Preferences</Text>
      
      <View style={[styles.card, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.outline }]}>
        <List.Item
          title="Dark Mode"
          titleStyle={{ color: theme.colors.onSurface }}
          left={() => <List.Icon icon="theme-light-dark" color={theme.colors.primary} />}
          right={() => (
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              color={theme.colors.primary}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp('5%') },
  title: { fontSize: hp('3%'), fontWeight: 'bold', marginBottom: hp('3%') },
  card: {
    borderRadius: hp('2%'),
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
