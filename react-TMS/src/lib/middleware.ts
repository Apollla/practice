import type { Middleware } from "@reduxjs/toolkit"

export const loggerMiddleware: Middleware = store => next => action => {
  const timestamp = Date.now();
  console.group(`Action: ${action.type} at ${new Date(timestamp).toISOString()}`);
  console.log('Previous State:', store.getState());
  console.log('Action:', action);

  const result = next(action);

  console.log('Next State:', store.getState());
  console.log('Time Elapsed:', Date.now() - +timestamp);
  console.groupEnd();

  return result;
};