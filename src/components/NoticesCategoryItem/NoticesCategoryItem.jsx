import React from 'react'

const NoticesCategoryItem = () => {
  return (
    <li>
      <div>
        <img src={avatar} alt="Pets" width="100" />
        <p>{condition}</p>
        <span className={ favorite ? css.onFavorite : css.offFavorite}></span>
      </div>
    <h3>{title}</h3>
      <p>Breed:{breed}</p> 
      <p>Location:{location}</p>
      <p>Age:{age}</p> 
    <button>Learn more</button>
    {favorite? <button
      type='submit'
      onClick={onDeletePets(id)}>
      Delete
    </button> : null}
    </li>
  )
}

export default NoticesCategoryItem