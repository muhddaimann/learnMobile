import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useGreeting } from '@/hooks/useGreeting';

export default function Home() {
  const theme = useTheme();
  const greeting = useGreeting();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ paddingBottom: hp('5%') }}
    >
      <View style={styles.header}>
        <Text style={[styles.greeting, { color: theme.colors.primary }]}>
         {greeting}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.onBackground }]}>
          Here's your daily overview
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: wp('5%') },
  header: { marginTop: hp('4%'), marginBottom: hp('2%') },
  greeting: { fontSize: hp('3%'), fontWeight: 'bold' },
  subtitle: { fontSize: hp('2%'), marginTop: 4 },
});

