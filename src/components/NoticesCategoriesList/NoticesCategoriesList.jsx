import React from 'react';

import { NoticesCategoryItem } from './NoticesCategoryItem.js';

const NoticesCategoriesList = ({ userPets, condition }) => {
  const filterPets = userPets.filter(pets => pets.condition === condition);

  return (
    <ul key={filterPets.id}>
      {userPets.map(
        ({ id, favorite, avatar, title, breed, location, age, condition }) => (
          <NoticesCategoryItem
            key={id}
            avatar={avatar}
            favorite={favorite}
            title={title}
            breed={breed}
            location={location}
            age={age}
            condition={condition}
          />
        )
      )}
    </ul>
  );
};

export default NoticesCategoriesList;
