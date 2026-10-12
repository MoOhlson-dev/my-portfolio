import { signal } from '@angular/core';

// Takes any of RAW lists from Models and and turns into a Readonly Signal with auto-IDs
export function createSignalList<T>(rawItems: T[]) {
  const mapped = rawItems.map((item, index) => ({...item, id: index  }));
  return signal(mapped).asReadonly();
}