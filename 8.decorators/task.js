"use strict";

/* --- Задача № 1 --- */

function cachingDecoratorNew(func) {
  let cache = [];

  return (...args) => {
    const hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      return "Из кэша: " + objectInCache.result;
    }

    const result = func(...args);
    cache.push({ hash, result });

    if (cache.length > 5) {
      cache.shift();
      console.log("Кеш переполнен, удаляем первый элемент");
    }
    return "Вычисляем: " + result;
  };
};

/* --- Задача № 2 --- */

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = true;
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  return wrapper;
};