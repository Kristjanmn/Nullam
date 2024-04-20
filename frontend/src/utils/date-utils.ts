export function dateToString(date: Date): string {
    let day: string = date.getDate().toString();
    if (day.length < 2) day = '0' + day;
    let month: string = date.getMonth().toString();
    if (month.length < 2) month = '0' + month;
    return day + '.'
        + month + '.'
        + date.getFullYear();
}

export function isDateInFuture(date: Date): boolean {
    return new Date().getTime() - date.getTime() < 0;

}