export function isAnyStringBlank(args: string[]): boolean {
    args.forEach((arg) => {
        if (arg === null || arg === undefined || arg === '')
            return true;
    });
    return false;
}