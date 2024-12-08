export const useApiUrl = () => {
  const config = useRuntimeConfig();
  return (path: string) => `${config.public.apiBase}${path}`;
};
