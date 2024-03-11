import { SearchIcon } from "../../assets/icons/SvgIcon";
import { Input } from "./input";

const SearchInput = () => {
  return (
    <div className="relative w-full h-11 shadow-search-input-shadow">
      <span className="absolute left-[14px] top-1/2 -translate-y-1/2">
        <SearchIcon />
      </span>
      <Input
        className="w-full h-11 py-2.5 px-9 text-base bg-secondary rounded-lg border border-white/10 text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white"
        placeholder="Rechercher"
      />
    </div>
  );
};

export default SearchInput;
