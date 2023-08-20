import { ZodSchema } from "zod";

export function useSessionStorage() {
  function getItem<T>(key: string, schema: ZodSchema<T>) {
    const storageItem = sessionStorage.getItem(key);

    if (!storageItem) return null;

    try {
      const parsedItem = schema.parse(JSON.parse(storageItem));

      return parsedItem as T;
    } catch (_) {
      return null;
    }
  }

  return { getItem };
}
