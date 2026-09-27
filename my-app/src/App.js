import React, { useState } from 'react';

import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkText, {
  TEXT_STYLES,
} from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

// Backpack's Calendar needs one entry per weekday. `index` follows JavaScript's
// Date.getDay() (0 = Sunday), which is why Monday is index 1 and matches
// weekStartsOn={1} below.
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

// Full date, used for accessible labels on each day, e.g. "Monday, 21 September 2026".
const formatDateFull = (date) =>
  new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

// Month heading shown above the grid, e.g. "September 2026".
const formatMonth = (date) =>
  new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric',
  }).format(date);

const App = () => {
  // The month currently displayed (changes when the user navigates).
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // The date the user has picked (null until they choose one).
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText
            tagName="h1"
            textStyle={TEXT_STYLES.heading1}
            className={getClassName('App__heading')}
          >
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkCalendar
          id="flight-schedule-calendar"
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          month={currentMonth}
          onMonthChange={(event, { month }) => setCurrentMonth(month)}
          onDateSelect={setSelectedDate}
          date={selectedDate}
        />
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;