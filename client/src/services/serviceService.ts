import { blogAPI } from "../api/blogAPI"; // Assure-toi que cette instance pointe sur http://127.0.0.1:8000/api
import type { serviceInterface } from "../types/service";

interface PaginatedServiceResponse {
  message?: string;
  data: serviceInterface[];
  meta?: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

export const servicesService = {
  // 1. Récupérer tous les services (/services)
  getAll: async (): Promise<serviceInterface[]> => {
    const response = await blogAPI.get<PaginatedServiceResponse | serviceInterface[]>("/services");
    if (Array.isArray(response.data)) return response.data;
    return response.data.data || [];
  },

  // 2. Récupérer les services mis en avant (/services/featured)
  getFeaturedServices: async (): Promise<serviceInterface[]> => {
    const response = await blogAPI.get<any>("/services/featured");
    return response.data.data ? response.data.data : response.data;
  },

  // 3. Récupérer les offres du jour (/services/deals-of-day)
  getDealsOfDay: async (): Promise<serviceInterface[]> => {
    const response = await blogAPI.get<any>("/services/deals-of-day");
    return response.data.data ? response.data.data : response.data;
  },

  // 4. Récupérer un service par son ID (/services/:id)
  getServiceById: async (id: number | string): Promise<serviceInterface> => {
    const response = await blogAPI.get<any>(`/services/${id}`);
    return response.data.data ? response.data.data : response.data;
  },
};