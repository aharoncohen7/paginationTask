export const Mapper = <T>(dto: T, body: any): T => {
    if (!dto) {
        throw new Error('dto cannot be null or undefined');
    }

    const mappedDTO: Partial<T> = {};

    Object.keys(dto).forEach(key => {
        const targetValue = body && body[key];
        const dtoValue = (dto as any)[key];

        if (targetValue && typeof targetValue === typeof dtoValue) {
            if (typeof dtoValue === 'object' && !Array.isArray(dtoValue) && dtoValue !== null) {
                (mappedDTO as any)[key] = Mapper(dtoValue, targetValue); // Recursively map nested objects
            } else {
                (mappedDTO as any)[key] = targetValue;
            }
        }
    });

    return mappedDTO as T;
};
