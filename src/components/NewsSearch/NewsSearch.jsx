import { useState } from "react";
import { FilterInput } from "shared/components";

export const NewsSearch = ({ searchFunction }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const searchHandler = e => {
		setSearchQuery(e.target.value);
		searchFunction(e.target.value);
	}


	const removeQuery = () => {
		setSearchQuery("")
		searchFunction("");
	}

	return (
    <FilterInput
    type="text"  
    value={searchQuery} 
    onChange={searchHandler}
	handleClear={removeQuery}
	maxWidth={['280px', '280px', '280px', '608px', '608px' ]}
	/>
	
    )
  }