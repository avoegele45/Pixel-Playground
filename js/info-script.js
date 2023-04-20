import { Savers } from "./user-savers.js";

const link = document.querySelector('link[rel="stylesheet"]');

if (Savers.InfoTheme.get() != null) {
  link.href = Savers.InfoTheme.get();
}