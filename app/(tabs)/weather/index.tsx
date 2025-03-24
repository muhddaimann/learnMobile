import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme, ActivityIndicator, Card } from 'react-native-paper';
import { useWeatherStore } from '@/contexts/api/weather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Weather() {
  const theme = useTheme();
  const [city, setCity] = useState('Kuala Lumpur');
  const { fetchWeather, weather, loading, error } = useWeatherStore();

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (city.trim()) fetchWeather(city.trim());
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>🌦 Weather Lookup</Text>

      <TextInput
        placeholder="Enter city..."
        value={city}
        onChangeText={setCity}
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.surface,
            color: theme.colors.onSurface,
            borderColor: theme.colors.outline,
          },
        ]}
        placeholderTextColor={theme.colors.outline}
      />

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleSearch}>
        <Text style={{ color: theme.colors.onPrimary, fontWeight: 'bold' }}>Search</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator animating size="large" color={theme.colors.primary} style={{ marginTop: hp('3%') }} />}

      {error && (
        <Text style={{ color: theme.colors.error, marginTop: hp('2%') }}>
          {error}
        </Text>
      )}

      {weather && !loading && (
        <Card
          style={[
            styles.card,
            {
              backgroundColor: theme.colors.surface,
              shadowColor: theme.colors.outline,
            },
          ]}
        >
          <Card.Title
            title={`${weather.location.name}, ${weather.location.country}`}
            titleStyle={{ color: theme.colors.primary }}
          />
          <Card.Content>
            <Text style={[styles.dataText, { color: theme.colors.onSurface }]}>
              Temp: {weather.current.temp_c}°C, {weather.current.condition.text}
            </Text>
            <Text style={[styles.dataText, { color: theme.colors.onSurface }]}>
              Feels like: {weather.current.feelslike_c}°C
            </Text>
            <Text style={[styles.dataText, { color: theme.colors.onSurface }]}>
              Wind: {weather.current.wind_kph} kph
            </Text>
            <Text style={[styles.dataText, { color: theme.colors.onSurface }]}>
              Humidity: {weather.current.humidity}%
            </Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp('5%') },
  title: { fontSize: hp('3%'), fontWeight: 'bold', marginBottom: hp('2%') },
  input: {
    borderRadius: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.2%'),
    borderWidth: 1,
    fontSize: 16,
    marginBottom: hp('1.5%'),
  },
  button: {
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderRadius: hp('1.5%'),
    marginBottom: hp('3%'),
  },
  card: {
    borderRadius: hp('2%'),
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dataText: {
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
  },
});
