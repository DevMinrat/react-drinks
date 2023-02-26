import React from "react";

const Sort = () => {
  const [isSortOpen, setSortOpen] = React.useState(false);
  const [selectedSortId, setSelectedSortId] = React.useState(0);

  const sortList = ["Цене ↓", "Цене ↑", "Алфавиту ↓", "Алфавиту ↑"];

  const clickOnOption = (idx) => {
    setSelectedSortId(idx);
    setSortOpen(false);
  };

  return (
    <div className="sort">
      <p className="sort-title">Сортировать по:</p>
      <div className="sort-select">
        <p
          className="sort-select__selected"
          onClick={() => setSortOpen(!isSortOpen)}
        >
          {sortList[selectedSortId]}
        </p>
        {isSortOpen && (
          <div className="sort-select__modal">
            {sortList.map((el, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => clickOnOption(idx)}
                  className={selectedSortId === idx ? "active" : ""}
                  type="button"
                >
                  {el}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
