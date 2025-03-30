import { create } from "zustand";
import { auth, provider, signInWithPopup } from "../utils/firebase.config.js";
import { axiosInstance } from "@/utils/axios.js";
import toast from "react-hot-toast";

export const AuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  checkingAuth: true,
  signing: false,
  loggingout: false,

  // Signup
  signup: async () => {
    try {
      set({ signing: true });
      // google auth
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();
      // sign up
      const response = await axiosInstance.post("/users/signup", { idToken });
      set({ user: response.data.user, isAuthenticated: true });
      toast.success("Sign Up Successful");
      return { success: true };
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(
        error.response?.data?.message || "Sign up failed. Try again."
      );
      return { success: false, message: error.message || "Unknown error" };
    } finally {
      set({ signing: false });
    }
  },

  // CheckAuth
  checkAuth: async () => {
    try {
      set({ checkingAuth: true });
      const response = await axiosInstance.get("/users/checkAuth");
      set({ isAuthenticated: true, user: response.data.user });
      console.log(user);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Authentication check failed.",
      };
    } finally {
      set({ checkingAuth: false });
    }
  },

  // Logout
  logout: async () => {
    try {
      set({ loggingout: true });
      await axiosInstance.get("/users/logout");
      set({ user: null, isAuthenticated: false });
      toast.success("Logout Successful");
      return { success: true };
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error(error.response?.data?.message || "Logout failed. Try again.");
      return { success: false, message: error.message || "Unknown error" };
    } finally {
      set({ loggingout: false });
    }
  },
}));
