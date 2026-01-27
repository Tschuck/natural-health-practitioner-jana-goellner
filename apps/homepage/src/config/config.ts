const config = {
  buildId: (import.meta.env.VITE_BUILD_ID as string) || '01956b8f-3d09-7198-ae70-4e887843587e',
  publicUrl: import.meta.env.VITE_PUBLIC_URL as string,
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER as string,
  backendUrl: import.meta.env.VITE_BACKEND_URL as string,
  email: import.meta.env.VITE_EMAIL as string,
};

export default config;
