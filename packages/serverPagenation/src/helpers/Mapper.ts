// export const Mapper = <T>(dto: T, body: any): T => {
//     if (!dto) {
//         throw new Error('dto cannot be null or undefined');
//     }

//     const mappedDTO: Partial<T> = {};
//     Object.keys(dto).forEach(key => {
//         const targetValue = body && body[key];
//         const dtoValue = (dto as any)[key];

//         if (targetValue && typeof targetValue === typeof dtoValue) {
//             if (typeof dtoValue === 'object' && !Array.isArray(dtoValue) && dtoValue !== null) {
//                 (mappedDTO as any)[key] = Mapper(dtoValue, targetValue); // Recursively map nested objects
//             } else {
//                 (mappedDTO as any)[key] = targetValue;
//             }
//         }
//     });

//     return mappedDTO as T;
// };

// export const Mapper = <T>(dto: T, body: any): T => {
//     if (!dto) {
//       throw new Error('dto cannot be null or undefined');
//     }
  
//     const mappedDTO: Partial<T> = {};
//     Object.keys(dto).forEach(key => {
//       const targetValue = body && body[key];
//       const dtoValue = (dto as any)[key];
  
//       if (targetValue !== undefined) {
//         if (typeof dtoValue === 'object' && !Array.isArray(dtoValue) && dtoValue !== null) {
//           // אם זה אובייקט, העתק אותו כמו שהוא אם ה-dto ריק, אחרת מפה רקורסיבית
//           (mappedDTO as any)[key] = Object.keys(dtoValue).length === 0 
//             ? targetValue 
//             : Mapper(dtoValue, targetValue);
//         } else {
//           (mappedDTO as any)[key] = targetValue;
//         }
//       }
//     });
  
//     return mappedDTO as T;
//   };


export const Mapper = <T>(dto: T, body: any): Partial<T> => {
    if (!dto) {
      throw new Error('dto cannot be null or undefined');
    }
  
    const mappedDTO: Partial<T> = {};
    
    Object.keys(dto).forEach(key => {
      const targetValue = body && body[key];
      const dtoValue = (dto as any)[key];
  
      if (targetValue !== undefined && targetValue !== '') {
        if (key === 'filters' && typeof targetValue === 'object') {
          // Handle 'filters' object separately
          (mappedDTO as any)[key] = targetValue;
        } else if (typeof dtoValue === 'object' && !Array.isArray(dtoValue) && dtoValue !== null) {
          // For other objects, recursively map
          const mappedObject = Mapper(dtoValue, targetValue);
          if (Object.keys(mappedObject).length > 0) {
            (mappedDTO as any)[key] = mappedObject;
          }
        } else {
          (mappedDTO as any)[key] = targetValue;
        }
      }
    });
  
    return mappedDTO;
  };
