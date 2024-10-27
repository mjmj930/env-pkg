function displayDateTime(): string {
    const now = new Date();

    const year = now.getFullYear(); // 获取年份
    const month = now.getMonth() + 1; // 获取月份，月份从0开始，所以加1
    const day = now.getDate(); // 获取日期
    const hours = now.getHours(); // 获取小时
    const minutes = now.getMinutes(); // 获取分钟
    const seconds = now.getSeconds(); // 获取秒数
    const weekDay = now.getDay(); // 获取星期几，0是周日，6是周六

    // 将0-5的星期几转换为1-7，1是周日，7是周六
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekDayName = weekDays[weekDay];

    // 格式化日期和时间，确保单个数字前面有0
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // 构建最终的日期时间字符串
    const dateTimeString = `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds} ${weekDayName}`;

    return dateTimeString;
}

// 调用函数并打印结果
console.log(displayDateTime());
