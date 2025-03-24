import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
  Text,
  Searchbar,
  ActivityIndicator,
  Card,
  useTheme,
} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    const hour = new Date().getHours();
    const message =
      hour < 12
        ? 'Good Morning'
        : hour < 18
        ? 'Good Afternoon'
        : 'Good Evening';
    setGreeting(message);

    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ paddingBottom: hp('5%') }}
    >
      <View style={styles.header}>
        <Text style={[styles.greeting, { color: theme.colors.primary }]}>
          {greeting} 👋
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.onBackground }]}>
          Here's your daily overview
        </Text>
      </View>

      <Searchbar
        placeholder="Search anything..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={[
          styles.searchbar,
          {
            backgroundColor: theme.colors.surface,
            elevation: 3,
          },
        ]}
        iconColor={theme.colors.primary}
        inputStyle={{ fontSize: 14, color: theme.colors.onPrimary }}
      />

      {loading ? (
        <ActivityIndicator
          animating
          size="large"
          color={theme.colors.primary}
          style={styles.loader}
        />
      ) : (
        <View style={styles.cardsContainer}>
          <Card style={[styles.card, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.outline }]}>
            <Card.Title
              title="Weather Update"
              titleStyle={{ color: theme.colors.primary }}
            />
            <Card.Content>
              <Text style={{ color: theme.colors.onSurface }}>
                It's 27°C today with cloudy skies. Perfect for a walk!
              </Text>
            </Card.Content>
          </Card>

          <Card style={[styles.card, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.outline }]}>
            <Card.Title
              title="Daily Quote"
              titleStyle={{ color: theme.colors.primary }}
            />
            <Card.Content>
              <Text style={{ color: theme.colors.onSurface }}>
                "Discipline is choosing between what you want now and what you want most."
              </Text>
            </Card.Content>
          </Card>

          <Card style={[styles.card, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.outline }]}>
            <Card.Title
              title="Reminder"
              titleStyle={{ color: theme.colors.primary }}
            />
            <Card.Content>
              <Text style={{ color: theme.colors.onSurface }}>
                Don’t forget to check your settings and update your profile.
              </Text>
            </Card.Content>
          </Card>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: wp('5%') },
  header: { marginTop: hp('4%'), marginBottom: hp('2%') },
  greeting: { fontSize: hp('3%'), fontWeight: 'bold' },
  subtitle: { fontSize: hp('2%'), marginTop: 4 },
  searchbar: { marginBottom: hp('2%'), borderRadius: hp('3%') },
  loader: { marginTop: hp('10%') },
  cardsContainer: { gap: hp('2%') },
  card: { borderRadius: hp('2%'), elevation: 1 },
});

