import { useSearch } from "../../../hooks/useSearch";
import { SEARCHPOSTS } from "../../../constants/searchposts";
import { SearchPageView } from "./SearchPageView";

export function SearchPageController() {
  const { searchQuery } = useSearch();

  const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "");

  const filteredPosts = SEARCHPOSTS.filter((post) =>
    normalize(post.title).includes(normalize(searchQuery))
  );

  return <SearchPageView searchQuery={searchQuery} filteredPosts={filteredPosts} />;
}