export function romanToInt(s: string): number {
    const romanValues: Record<string, number> = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let num = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i] as string; 
        const currentVal = romanValues[char] ?? 0;

        if (i == s.length - 1){
            num += currentVal;
            continue;
        }

        if (currentVal < (romanValues[s[i + 1] as string] ?? 0)) {
            num -= currentVal;
        } else {
            num += currentVal;
        }
    }
    return num;
}
