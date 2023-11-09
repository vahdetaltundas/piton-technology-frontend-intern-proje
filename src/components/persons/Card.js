import React from "react";
const Card = ({person}) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg p-3"
            src={person.image}
            alt=""
          />
        </a>
        <div className="p-5">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {person.name}  {person.surname}
            </h5>
          <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
            {person.title}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
