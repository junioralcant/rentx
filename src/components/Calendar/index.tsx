import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Calendar as CustonCalendar,
  LocaleConfig,
} from 'react-native-calendars';

import { Container } from './styles';
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeior',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  const theme = useTheme();
  return (
    <Container>
      <CustonCalendar
        renderArrow={(direction) => (
          <Feather
            size={24}
            color={theme.colors.text}
            name={
              direction === 'left' ? 'chevron-left' : 'chevron-right'
            }
          />
        )}
        headerStyle={{
          backgroundColor: theme.colors.background_secondary,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_500,
          textDayHeaderFontSize: 10,
          textMonthFontFamily: theme.fonts.secondary_600,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.title,
          arrowStyle: {
            marginHorizontal: -15,
          },
        }}
        firstDay={1}
        minDate={String(new Date())}
      />
    </Container>
  );
}
