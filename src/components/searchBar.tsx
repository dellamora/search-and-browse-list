type SearchBarProps = {
    query: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const SearchBar = ({query, onChange, placeholder}:SearchBarProps) => {
    return (
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={onChange}
          placeholder={placeholder}
          className="pl-6 group border rounded-full transition-colors  border-slate-300 focus:border-blue-300 focus:placeholder:text-blue-300 roudend block w-full py-3 pr-14  text-slate-600 placeholder:text-gray-400 placeholder:text-xl lg:text-xl sm:text-sm sm:leading-6"
        />
    )
}

export default SearchBar