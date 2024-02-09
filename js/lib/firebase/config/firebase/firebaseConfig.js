const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messageingSenderId: import.meta.env.VITE_MESSSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export {firebaseConfig};