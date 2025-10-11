import axios from "axios";

// Base API instance
export const api = axios.create({
    baseURL: "https://blog.lpialhidayah.or.id/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: false, // matikan kalau domain API berbeda (CORS)
});

// Interceptor optional untuk logging error
api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API Error:", err?.response || err);
        return Promise.reject(err);
    }
);

// =============================
// 🔹 API FUNCTIONS
// =============================

// --- ARTICLES ---
export const getArticles = () => api.get("/articles");

export const getArticlesByPage = (page: number) =>
    api.get(`/articles/${page}/paginasi`);

export const getArticleById = (id: number) =>
    api.get(`/articles/${id}`);

export const getArticlesByType = (type: string, id: number) =>
    api.get(`/articles/${type}/${id}`);

export const getArticlesByFilters = (
    filters: { category?: number; pendidikan?: number; tingkat?: number; jenis?: number }
) => {
    let url = "/articles";

    if (filters.category) url += `/Category/${filters.category}`;
    if (filters.pendidikan) url += `/pendidikan/${filters.pendidikan}`;
    if (filters.tingkat) url += `/tingkat/${filters.tingkat}`;
    if (filters.jenis) url += `/jenis/${filters.jenis}`;

    return api.get(url);
};

// --- TYPES (Categories, Pendidikan, Tingkat, Jenis, Contact) ---
export const getCategories = () => api.get("/categories");
export const getJenises = () => api.get("/jenises");
export const getPendidikans = () => api.get("/pendidikans");
export const getTingkats = () => api.get("/tingkats");
export const getContacts = () => api.get("/contact");

// --- Single Type Fetch ---
export const getCategoryById = (id: number) => api.get(`/categories/${id}`);
export const getJenisById = (id: number) => api.get(`/jenises/${id}`);
export const getPendidikanById = (id: number) => api.get(`/pendidikans/${id}`);
export const getTingkatById = (id: number) => api.get(`/tingkats/${id}`);
export const getContactById = (id: number) => api.get(`/contact/${id}`);

// =============================
// 🔹 Example Custom Hooks (optional, jika mau lebih idiomatis React)
// =============================

// Kamu bisa pakai React Query atau Tanstack Query kalau mau caching otomatis.
// Tapi ini versi sederhana tanpa library tambahan:
export const fetchArticles = async (page = 1) => {
    const res = await getArticlesByPage(page);
    return res.data;
};
