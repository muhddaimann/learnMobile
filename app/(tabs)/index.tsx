import React, { useEffect } from 'react';
import { useGreeting } from '@/hooks/useGreeting';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, useTheme, Card, Title, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
          {greeting}, Rahman!
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.secondary }]}>Here’s your dashboard overview</Text>
      </View>

      <View style={styles.cardContainer}>
        <Card style={[styles.card, { backgroundColor: theme.colors.primaryContainer, shadowColor: theme.colors.outline }]}>
          <Card.Content>
            <Title style={[styles.cardTitle, { color: theme.colors.onPrimaryContainer }]}>1,245</Title>
            <Paragraph style={{ color: theme.colors.onPrimaryContainer }}>Total Users</Paragraph>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.primaryContainer, shadowColor: theme.colors.outline }]}>
          <Card.Content>
            <Title style={[styles.cardTitle, { color: theme.colors.onPrimaryContainer }]}>763</Title>
            <Paragraph style={{ color: theme.colors.onPrimaryContainer }}>Active Sessions</Paragraph>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.primaryContainer, shadowColor: theme.colors.outline }]}>
          <Card.Content>
            <Title style={[styles.cardTitle, { color: theme.colors.onPrimaryContainer }]}>$12.4k</Title>
            <Paragraph style={{ color: theme.colors.onPrimaryContainer }}>Monthly Revenue</Paragraph>
          </Card.Content>
        </Card>

        <Card style={[styles.card, { backgroundColor: theme.colors.secondaryContainer, shadowColor: theme.colors.outline }]}>
          <Card.Content>
            <Title style={[styles.cardTitle, { color: theme.colors.onSecondaryContainer }]}>89%</Title>
            <Paragraph style={{ color: theme.colors.onSecondaryContainer }}>Uptime</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.fullWidthRow}>
  <Card style={[styles.fullWidthCard, { backgroundColor: theme.colors.primaryContainer, shadowColor: theme.colors.outline }]}>
    <Card.Content>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [12400, 13500, 12750, 14200, 13800, 15000],
            },
          ],
        }}
        width={wp('80%')}
        height={hp('28%')}
        yAxisSuffix="$"
        chartConfig={{
          backgroundColor: theme.colors.primaryContainer,
          backgroundGradientFrom: theme.colors.primaryContainer,
          backgroundGradientTo: theme.colors.primaryContainer,
          decimalPlaces: 0,
          color: () => theme.colors.secondary,
          labelColor: () => theme.colors.onPrimaryContainer,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: theme.colors.primary,
          },
        }}
        bezier
        style={{ borderRadius: 8, alignSelf: 'center' }}
        />
    </Card.Content>
  </Card>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: wp('5%') },
  header: { marginTop: hp('4%'), marginBottom: hp('2%') },
  greeting: { fontSize: hp('3%'), fontWeight: 'bold' },
  subtitle: { fontSize: hp('2%'), marginTop: hp('0.5%') },
  cardContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: hp('1%') },
  card: { width: '48%', borderRadius: 8, elevation: 2 },
  cardTitle: { fontSize: hp('2.8%'), fontWeight: '600' },
  chartTitle: { fontSize: hp('2.2%'), fontWeight: '600', marginBottom: hp('1%') },
  fullWidthRow: { width: '100%', marginTop: hp('2%') },
  fullWidthCard: { width: '100%', borderRadius: 8, elevation: 2, paddingHorizontal: wp('5%'), paddingVertical: hp('2%') },  
});
