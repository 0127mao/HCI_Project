<template>
  <div class="shell">
    <header>
      <div class="day">{{ currentDate.getDate() }}</div>
      <div class="month">{{ getMonthName(currentDate.getMonth()) }}</div>
    </header>
    <table class="calendar">
      <thead>
        <tr>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
          <td>Sun</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            :class="[
              isToday_class(0) ? 'current_day' : '',
              isCurrentMonth_class(0) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(0) }}
          </td>
          <td
            :class="[
              isToday_class(1) ? 'current_day' : '',
              isCurrentMonth_class(1) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(1) }}
          </td>
          <td
            :class="[
              isToday_class(2) ? 'current_day' : '',
              isCurrentMonth_class(2) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(2) }}
          </td>
          <td
            :class="[
              isToday_class(3) ? 'current_day' : '',
              isCurrentMonth_class(3) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(3) }}
          </td>
          <td
            :class="[
              isToday_class(4) ? 'current_day' : '',
              isCurrentMonth_class(4) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(4) }}
          </td>
          <td
            :class="[
              isToday_class(5) ? 'current_day' : '',
              isCurrentMonth_class(5) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(5) }}
          </td>
          <td
            :class="[
              isToday_class(6) ? 'current_day' : '',
              isCurrentMonth_class(6) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(6) }}
          </td>
        </tr>
        <tr>
          <td
            :class="[
              isToday_class(7) ? 'current_day' : '',
              isCurrentMonth_class(7) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(7) }}
          </td>
          <td
            :class="[
              isToday_class(8) ? 'current_day' : '',
              isCurrentMonth_class(8) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(8) }}
          </td>
          <td
            :class="[
              isToday_class(9) ? 'current_day' : '',
              isCurrentMonth_class(9) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(9) }}
          </td>
          <td
            :class="[
              isToday_class(10) ? 'current_day' : '',
              isCurrentMonth_class(10) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(10) }}
          </td>
          <td
            :class="[
              isToday_class(11) ? 'current_day' : '',
              isCurrentMonth_class(11) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(11) }}
          </td>
          <td
            :class="[
              isToday_class(12) ? 'current_day' : '',
              isCurrentMonth_class(12) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(12) }}
          </td>
          <td
            :class="[
              isToday_class(13) ? 'current_day' : '',
              isCurrentMonth_class(13) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(13) }}
          </td>
        </tr>
        <tr>
          <td
            :class="[
              isToday_class(14) ? 'current_day' : '',
              isCurrentMonth_class(14) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(14) }}
          </td>
          <td
            :class="[
              isToday_class(15) ? 'current_day' : '',
              isCurrentMonth_class(15) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(15) }}
          </td>
          <td
            :class="[
              isToday_class(16) ? 'current_day' : '',
              isCurrentMonth_class(16) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(16) }}
          </td>
          <td
            :class="[
              isToday_class(17) ? 'current_day' : '',
              isCurrentMonth_class(17) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(17) }}
          </td>
          <td
            :class="[
              isToday_class(18) ? 'current_day' : '',
              isCurrentMonth_class(18) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(18) }}
          </td>
          <td
            :class="[
              isToday_class(19) ? 'current_day' : '',
              isCurrentMonth_class(19) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(19) }}
          </td>
          <td
            :class="[
              isToday_class(20) ? 'current_day' : '',
              isCurrentMonth_class(20) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(20) }}
          </td>
        </tr>
        <tr>
          <td
            :class="[
              isToday_class(21) ? 'current_day' : '',
              isCurrentMonth_class(21) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(21) }}
          </td>
          <td
            :class="[
              isToday_class(22) ? 'current_day' : '',
              isCurrentMonth_class(22) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(22) }}
          </td>
          <td
            :class="[
              isToday_class(23) ? 'current_day' : '',
              isCurrentMonth_class(23) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(23) }}
          </td>
          <td
            :class="[
              isToday_class(24) ? 'current_day' : '',
              isCurrentMonth_class(24) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(24) }}
          </td>
          <td
            :class="[
              isToday_class(25) ? 'current_day' : '',
              isCurrentMonth_class(25) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(25) }}
          </td>
          <td
            :class="[
              isToday_class(26) ? 'current_day' : '',
              isCurrentMonth_class(26) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(26) }}
          </td>
          <td
            :class="[
              isToday_class(27) ? 'current_day' : '',
              isCurrentMonth_class(27) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(27) }}
          </td>
        </tr>
        <tr>
          <td
            :class="[
              isToday_class(28) ? 'current_day' : '',
              isCurrentMonth_class(28) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(28) }}
          </td>
          <td
            :class="[
              isToday_class(29) ? 'current_day' : '',
              isCurrentMonth_class(29) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(29) }}
          </td>
          <td
            :class="[
              isToday_class(30) ? 'current_day' : '',
              isCurrentMonth_class(30) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(30) }}
          </td>
          <td
            :class="[
              isToday_class(31) ? 'current_day' : '',
              isCurrentMonth_class(31) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(31) }}
          </td>
          <td
            :class="[
              isToday_class(32) ? 'current_day' : '',
              isCurrentMonth_class(32) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(32) }}
          </td>
          <td
            :class="[
              isToday_class(33) ? 'current_day' : '',
              isCurrentMonth_class(33) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(33) }}
          </td>
          <td
            :class="[
              isToday_class(34) ? 'current_day' : '',
              isCurrentMonth_class(34) ? '' : 'prev-month',
            ]"
          >
            {{ getDate_new(34) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="ring-left"></div>
    <div class="ring-right"></div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      currentDate: new Date(),
      calendarDate: [],
      calendarData_temp: [],
      isToday_array: [],
      isCurrentMonth_array: [],
    };
  },
  created() {
    this.generateCalendarData();
    this.updateCurrentDate();
    setInterval(this.updateCurrentDate, 60000); // 每分钟更新日期
  },
  methods: {
    updateCurrentDate() {
      this.currentDate = new Date();
    },
    getMonthName(month) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[month];
    },
    generateCalendarData() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDate = new Date(firstDay);
      startDate.setDate(firstDay.getDate() - firstDay.getDay()); // 获取上个月的日期
      const endDate = new Date(lastDay);
      endDate.setDate(lastDay.getDate() + (6 - lastDay.getDay())); // 获取下个月的日期

      const calendarData = [];
      const calendarData_temp = [];
      const isToday_array = [];
      const isCurrentMonth_array = [];
      let currentDatePointer = new Date(startDate);
      while (currentDatePointer <= endDate) {
        const dateObject = {
          date: new Date(currentDatePointer),
          isCurrentMonth: currentDatePointer.getMonth() === month,
          isToday: this.isToday(currentDatePointer),
        };
        calendarData_temp.push(new Date(currentDatePointer));
        isCurrentMonth_array.push(currentDatePointer.getMonth() === month);
        isToday_array.push(this.isToday(currentDatePointer));
        calendarData.push(dateObject);
        currentDatePointer.setDate(currentDatePointer.getDate() + 1);
      }

      this.calendarData = calendarData;
      this.calendarData_temp = calendarData_temp;
      this.isToday_array = isToday_array;
      this.isCurrentMonth_array = isCurrentMonth_array;
    },
    getDate_new(id) {
      const nd = new Date(this.calendarData_temp[id]);
      return nd.getDate();
    },
    isToday_class(id) {
      return this.isToday_array[id];
    },
    isCurrentMonth_class(id) {
      return this.isCurrentMonth_array[id];
    },
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
  },
};
</script>

<style scoped>
.shell {
  position: relative;
  width: 50vh;
  border-radius: 0 0 1em 1em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.2);
  height: 70vh;
}
.shell header {
  border-radius: 1em 1em 0 0;
  background: #afeefe;
  color: #ffffff;
  padding: 3em 2em;
  background-image: url("../images/blue_cloud.jpg");
  background-size: cover;
}

.day {
  font-size: 6em;
  font-weight: 900;
  line-height: 1em;
}

.month {
  font-size: 3em;
  line-height: 1em;
  /*text-transform: uppercase;*/
}

.calendar {
  width: 100%;
  background: #ffffff;
  border-radius: 0 0 1em 1em;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2), 0 3px 1px #ffffff;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.calendar thead {
  color: #2ca8ff;
  font-weight: 700;
  text-transform: uppercase;
}

.calendar td {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  font: 600 17px "";
  transition: -2s;
}
.calendar tbody td:hover {
  background: #7de3db;
  color: #ffffff;
  font: 600 23px "";
}
.current_day {
  color: cyan;
}

.prev-month,
.next-month {
  color: #777777;
}

.ring-left,
.ring-right {
  position: absolute;
  top: 215px;
}

.ring-left {
  left: 2em;
}
.ring-right {
  right: 2em;
}

.ring-left:before,
.ring-right:before {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.3), 0 -1px 1px rgba(0, 0, 0, -2);
  content: "";
  display: inline-block;
  margin: 8px;
  height: 32px;
  width: 8px;
}
</style>
