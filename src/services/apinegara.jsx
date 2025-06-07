import api from "./configapi.jsx";

export const Ambildatanegara = () => api.get(`/independent?status=true`);
export const Ambildetaildatanegara = (kodeNegara) =>
  api.get(`alpha/${kodeNegara}`);
