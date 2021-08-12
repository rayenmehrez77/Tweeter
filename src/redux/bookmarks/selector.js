import { createSelector } from "reselect";

export const selectBookmarks = (state) => state.bookmarks;

export const selectBookmarksItems = createSelector(
  [selectBookmarks],
  (bookmark) => bookmark.bookmarks
);
