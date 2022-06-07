import { Injectable } from '@angular/core';

export interface IStorage {
  length: number;
  clear(): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements IStorage {
  private readonly storage: IStorage;

  get length(): number {
    return this.storage.length;
  }

  constructor() {
    this.storage = window.localStorage;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
