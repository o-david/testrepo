import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Ask Cloudinary for a resized, auto-format/quality version of an image.
 * Non-Cloudinary URLs are returned unchanged.
 */
export function optimizeImage(url: string, width = 1200) {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  return url.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}
