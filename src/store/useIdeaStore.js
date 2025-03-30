import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const IdeaStore = create((set, get) => ({
  Ideas: [],
  loadingIdeas: false,
  viewIdea: null,
  loadingViewIdea: false,
  loggedInUserIdeas: [],
  loadingLoggedInUserIdeas: false,
  viewUser: null,
  viewUserIdeas: [],
  loadingViewUser: false,
  uploadingIdea: false,
  deleting: false,
  searching: false,

  // Load ideas
  loadIdeas: async () => {
    try {
      set({ loadingIdeas: true });
      const response = await axiosInstance.get("/ideas/getIdeas");
      set({ Ideas: response.data.Ideas });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loadingIdeas: false });
    }
  },

  // Load view ideas
  loadViewIdea: async (id) => {
    try {
      set({ loadingViewIdea: true });
      const response = await axiosInstance.get(`/ideas/getIdea/${id}`);
      set({ viewIdea: response.data.idea });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loadingViewIdea: false });
    }
  },

  // Logged in user ideas
  loadLoggedInUserIdea: async () => {
    try {
      set({ loadingLoggedInUserIdeas: true });
      const response = await axiosInstance.get("ideas/getUserIdeas");
      set({ loggedInUserIdeas: response.data.ideas });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loadingLoggedInUserIdeas: false });
    }
  },

  // Load view user
  loadViewUser: async (id) => {
    try {
      set({ loadingViewUser: true });
      const response = await axiosInstance.get(`/ideas/getViewUser/${id}`);
      set({
        viewUser: response.data.user,
        viewUserIdeas: response.data.user.ideas,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loadingViewUser: false });
    }
  },

  // Upload ideas
  uploadIdea: async (data) => {
    try {
      set({ uploadingIdea: true });
      const response = await axiosInstance.post("/ideas/addIdea", data);
      toast.success("Idea Uploaded Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ uploadingIdea: false });
    }
  },

  // Like idea
  likeIdea: async (id) => {
    try {
      const response = await axiosInstance.put(`/ideas/toggleIdeaLike/${id}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  // Delete idea
  deleteIdea: async (id) => {
    try {
      const response = await axiosInstance.delete(`/ideas/deleteIdea/${id}`);
      toast.success("Idea Deleted Successfully");
      set((state) => ({
        loggedInUserIdeas: state.loggedInUserIdeas.filter(
          (idea) => idea._id !== id
        ),
      }));
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ deleting: false });
    }
  },

  // Search ideas
  searchIdeas: async (query) => {
    try {
      set({ searching: true });
      const response = await axiosInstance.get(
        `/ideas/searchIdea?query=${query}`
      );
      set({ Ideas: response.data.results });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ searching: false });
    }
  },
}));
