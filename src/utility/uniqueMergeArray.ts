export function uniqueMergeArray<T>(a: T[], b: T[]): T[] {
    const output: T[] = [];
    for (const entry of a) {
        if (output.includes(entry) === false) {
            output.push(entry);
        }
    }
    for (const entry of b) {
        if (output.includes(entry) === false) {
            output.push(entry);
        }
    }
    return output;
}