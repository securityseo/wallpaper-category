import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Honor"
          title="Honor"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Diamond"
          title="Oreintal"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Carat"
          title="Carat"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Oreintal"
          title="Oreintal"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
