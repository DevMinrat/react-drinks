import React from "react";

const Filter = () => {
  const [activeBrand, setActiveBrand] = React.useState(0);

  const brands = [
    "Все",
    "Абрау-Дюрсо",
    "LOTTE",
    "Chupa Chups",
    "Dr Pepper",
    "Fanta",
    "Coca-Cola",
  ];

  const onClickFilter = (idx) => {
    setActiveBrand(idx);
  };

  return (
    <>
      <div className="cp-filter__brands">
        {brands.map((el, idx) => {
          return (
            <div
              key={idx}
              className={`cp-filter__brands-item ${
                activeBrand === idx ? "active" : ""
              }`}
              onClick={() => onClickFilter(idx)}
            >
              <span>{el}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filter;
