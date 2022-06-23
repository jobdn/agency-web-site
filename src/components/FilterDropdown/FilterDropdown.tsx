import { Select } from "antd";

import arrow from "../../assets/arrow.png";
import "./FilterDropdown.scss";

interface FilterProps {
  changeFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterDropdown: React.FC<FilterProps> = ({ changeFilter }) => {
  const handleSelect = (option: string) => {
    changeFilter(option);
  };

  return (
    <Select
      className="dropdown"
      defaultValue="Show All"
      onChange={handleSelect}
      dropdownClassName="dropdown"
      suffixIcon={<img src={arrow} alt="row" />}
    >
      <Select.Option value="">Show all</Select.Option>
      <Select.Option value="Design">Design</Select.Option>
      <Select.Option value="Branding">Branding</Select.Option>
      <Select.Option value="Illustration">Illustration</Select.Option>
      <Select.Option value="Motion">Motion</Select.Option>
    </Select>
  );
};
