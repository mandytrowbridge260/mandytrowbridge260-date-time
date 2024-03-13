# Date Time Utils

This module provides utilities for working with dates and times.

## Installation

You can install this module via npm: `npm install date-time-utils`

## Usage

### Convert to Timezone

```javascript
const { convertToTimeZone } = require('date-time-utils');

const dateStr = '2024-03-20 12:00:00';
const fromTimeZone = 'America/New_York';
const toTimeZone = 'Europe/London';

const convertedDateStr = convertToTimeZone(dateStr, fromTimeZone, toTimeZone);
console.log('Converted Date:', convertedDateStr);

