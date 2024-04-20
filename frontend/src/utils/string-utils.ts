export function isAnyStringBlank(args: string[]): boolean {
    args.forEach((arg) => {
        if (arg === '')
            return true;
    });
    return false;
}