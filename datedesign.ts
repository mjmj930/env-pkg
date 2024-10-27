在JavaScript中，`Date`对象默认使用的是浏览器或服务器的本地时区。如果你想要显示特定时区的时间，你可以使用以下几种方法：

### 方法1: 使用`Date`对象和时区偏移量

你可以创建一个新的`Date`对象，并手动添加或减去时区的偏移量。例如，如果你想显示北京时间（东八区，UTC+8），你可以这样做：

```typescript
function getDateTimeInTimeZone(timeZoneOffset: number): string {
    const now = new Date();
    const targetTime = new Date(now.getTime() + timeZoneOffset * 60000); // 加上时区偏移量（分钟）

    const year = targetTime.getFullYear();
    const month = (targetTime.getMonth() + 1).toString().padStart(2, '0');
    const day = targetTime.getDate().toString().padStart(2, '0');
    const hours = targetTime.getHours().toString().padStart(2, '0');
    const minutes = targetTime.getMinutes().toString().padStart(2, '0');
    const seconds = targetTime.getSeconds().toString().padStart(2, '0');
    const weekDay = targetTime.getDay();

    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekDayName = weekDays[weekDay];

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${weekDayName}`;
}

// 例如，北京时间的时区偏移量是-480（8小时*60分钟）
console.log(getDateTimeInTimeZone(-480));
```

### 方法2: 使用`Intl.DateTimeFormat`对象

`Intl.DateTimeFormat`对象允许你指定时区，并按照该时区格式化日期和时间。例如：

```typescript
function getDateTimeInTimeZone(timeZone: string): string {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'short'
    };

    const formatter = new Intl.DateTimeFormat('zh-CN', options);
    const now = new Date();
    const formattedDate = formatter.format(now);

    return formattedDate;
}

// 使用'Asia/Shanghai'时区
console.log(getDateTimeInTimeZone('Asia/Shanghai'));
```

### 方法3: 使用第三方库

如果你需要更复杂的时区处理，比如夏令时的自动调整，你可以使用像`moment-timezone`这样的第三方库。首先，你需要安装这个库：

```bash
npm install moment-timezone
```

然后，你可以这样使用它：

```typescript
import moment from 'moment-timezone';

function getDateTimeInTimeZone(timeZone: string): string {
    const now = moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss ddd');
    return now;
}

// 使用'Asia/Shanghai'时区
console.log(getDateTimeInTimeZone('Asia/Shanghai'));
```

这些方法可以帮助你根据需要显示特定时区的时间。选择哪种方法取决于你的具体需求和环境。
