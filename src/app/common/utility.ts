export const isValidArray = (toCheck: any): boolean => {
    if (typeof toCheck === 'object' && Array.isArray(toCheck) && toCheck.length > 0) {
        return true;
    }
    return false;
}

export const asyncForEach = async (array: any[], next: any) => {
    for (let i = 0;i<array.length;i++) {
        await next(array[i], i, array);
    }
}