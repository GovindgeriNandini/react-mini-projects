import { useTaskContext } from "../context/TaskContext";

const FilterControls = () => {
  const { filter, searchTerm, setFilter, setSearch, undoAction, canUndo } =
    useTaskContext();
  return (
    <div className="filter-controls">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search Tasks..."
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-section">
        <label>Filter :</label>
        <div className="filter-buttons">
          {["all", "completed", "pending"].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={filter === filterOption ? "active" : ""}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="action-section">
        <button onClick={undoAction} disabled={!canUndo} className="undo-btn">
          Undo
        </button>
      </div>
    </div>
  );
};

export default FilterControls
