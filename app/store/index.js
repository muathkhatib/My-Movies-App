import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export async function loadString(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch {
    return null;
  }
}

export async function loadData(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export async function storeData(key, value) {
  try {
    const dataString = JSON.stringify(value);
    const store = await AsyncStorage.setItem(key, dataString);
    return store;
  } catch (e) {
    return new Error(e);
  }
}

export function useAsyncStorage(key) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function getResource() {
      const response = await loadString(key);
      if (response) {
        setValue(JSON.parse(response));
      }
    }
    getResource();
  }, [key]);

  return value;
}

export async function updateStorage({key, value}) {
  const previousData = await loadString(key);
  if (!previousData) {
    return storeData(key, [value]);
  }
  const parsePreviousData = JSON.parse(previousData);
  return storeData(key, [...parsePreviousData, value]);
}

export async function deleteStorageItem({key, value}) {
  const loadedData = await loadData(key);
  const filterdData = loadedData.filter(item => item.id !== value.id);
  await AsyncStorage.removeItem(key);
  storeData(key, filterdData);
}
