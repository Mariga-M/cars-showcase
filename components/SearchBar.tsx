'use client'
import { useState } from "react"
import { SearchManufacturer } from "."
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="search icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const router = useRouter()
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")
  

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === ''){
      return alert('Please fill in search bar')
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = (model: string, manufacturer: string ) =>{
    const searchParams = new URLSearchParams(window.location.search)

    if(model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else { 
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname);
  }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <Image 
            src="/model-icon.png"
            alt="car model icon"
            width={25}
            height={5}
            className="absolute w-[20px} h-[20x]"
          />
          <input 
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Search Model..."
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar