import { requestStarted, requestFinished } from "../features/ui/uiSlice.js";

let requestQueue = Promise.resolve();

export async function apiFetch(url, options = {}, dispatch) {
  let releaseQueue;

  const previousRequest = requestQueue;

  requestQueue = new Promise((resolve) => {
    releaseQueue = resolve;
  });

  await previousRequest;

  dispatch(requestStarted());

  try {
    return await fetch(url, {
      ...options,
      credentials: "include",
    });
  } finally {
    dispatch(requestFinished());
    releaseQueue();
  }
}


