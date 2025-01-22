export function daysBetweenDates(startDate, endDate) {
    const daysBetween = Math.round((endDate.getTime() - startDate.getTime()) / (3600 * 24 * 1000))
    if(isNaN(daysBetween)) return 0;
    return daysBetween < 1 ? 1 : daysBetween;
}

export function displayDate(date) {
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${days[date.getDay()]}. ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}