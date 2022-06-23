import { Select } from "antd";

import { useAppDispatch, useTypedSelector } from "../../store";
import { selectFilterItem } from "../../store/reducers/filter";
import { AvailableFilterValues } from "../../models/IFilterItem";

import arrow from "../../assets/arrow.png";
import "./FilterDropdown.scss";

export const FilterDropdown: React.FC = () => {
  const { filterItems, filter } = useTypedSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleSelect = (option: string) => {
    dispatch(selectFilterItem(option as AvailableFilterValues));
  };

  return (
    <Select
      className="dropdown"
      defaultValue="Show All"
      onChange={handleSelect}
      dropdownClassName="dropdown"
      suffixIcon={<img src={arrow} alt="row" />}
      value={filter}
    >
      {filterItems.map((item) => (
        <Select.Option key={item.id} value={item.filterValue}>
          {item.text}
        </Select.Option>
      ))}
    </Select>
  );
};
