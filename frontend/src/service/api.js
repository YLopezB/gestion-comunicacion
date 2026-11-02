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
    const result = await fetch(url, {
      ...options,
      credentials: "include",
    });
    const data = await result.json();
    return data;
  } finally {
    dispatch(requestFinished());
    releaseQueue();
  }
}
