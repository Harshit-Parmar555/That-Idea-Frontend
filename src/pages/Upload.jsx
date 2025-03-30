import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { IdeaStore } from "@/store/useIdeaStore";

const Upload = () => {
  const { uploadIdea, uploadingIdea } = IdeaStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const form = new FormData();
      form.append("name", data.name);
      form.append("category", data.category);
      form.append("description", data.description);
      form.append("coverImage", data.coverImg[0]);
      form.append("pitch", data.pitch);
      await uploadIdea(form);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center lg:mt-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col items-center gap-6 p-4"
      >
        <h1 className="text-2xl font-[Inter] font-semibold text-zinc-200">
          Upload Your <span className="text-blue-600">Idea</span>
        </h1>

        {/* Name Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Idea Name
          </label>
          <Input
            placeholder="Enter Name Of Idea"
            className="h-12 border border-zinc-600 text-zinc-200"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Minimum 3 characters required" },
              maxLength: {
                value: 100,
                message: "Maximum 100 characters allowed",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Brief Description
          </label>
          <Textarea
            placeholder="Enter A Brief Description About Idea"
            className="h-24 border border-zinc-600 text-zinc-200"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
              maxLength: {
                value: 300,
                message: "Maximum 300 characters allowed",
              },
            })}
          />
          {errors.para && (
            <p className="text-red-500 text-sm">{errors.para.message}</p>
          )}
        </div>

        {/* Idea category field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Idea Category
          </label>
          <Input
            {...register("category", {
              required: "This field is required",
              maxLength: { value: 15, message: "Max 10 characters allowed" },
              pattern: {
                value: /^\S+$/, // Ensures only one word (no spaces)
                message: "Only one word allowed",
              },
            })}
            placeholder="Enter Category of Idea"
            className="h-12 border border-zinc-600 text-zinc-200"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Cover Image Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Cover Image
          </label>
          <Input
            type="file"
            accept="image/*"
            className="h-12 border border-zinc-600 text-zinc-200"
            {...register("coverImg", { required: "Cover image is required" })}
          />
          {errors.coverImg && (
            <p className="text-red-500 text-sm">{errors.coverImg.message}</p>
          )}
        </div>

        {/* Pitch Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium text-zinc-200 mb-1">
            Detailed Pitch
          </label>
          <Textarea
            placeholder="Enter Your Detailed Pitch"
            className="h-40 border border-zinc-600 text-zinc-200"
            {...register("pitch", {
              required: "Pitch is required",
              minLength: {
                value: 50,
                message: "Minimum 50 characters required",
              },
              maxLength: {
                value: 3000,
                message: "Maximum 3000 characters allowed",
              },
            })}
          />
          {errors.pitch && (
            <p className="text-red-500 text-sm">{errors.pitch.message}</p>
          )}
        </div>

        <Button
          disabled={uploadingIdea}
          className="w-full h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          {uploadingIdea ? "wait . . ." : "Upload"}
        </Button>
      </form>
    </div>
  );
};

export default Upload;
