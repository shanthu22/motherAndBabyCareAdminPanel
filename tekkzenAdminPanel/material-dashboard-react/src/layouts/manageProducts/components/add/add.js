import TKZNDropownButton from "components/TKZNDropownButton";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import "./add.css";
const Add = () => {
  const HandleChange = (e) => {
    console.log(typeof e.target);
    console.log(e.target.name);
  };

  return (
    <Card className="add">
      <MDBox p={2}>
        <MDTypography className="addHeading" variant="h5">
          ADD PRODUCT FORM
        </MDTypography>

        <form className="addForm">
          <div>
            <label>
              <MDTypography variant="h8">Product Type:</MDTypography>
            </label>
            <div className="aaaaa">
              <TKZNDropownButton CallbacHandleChange={HandleChange} />
            </div>
          </div>

          <div>
            <label>
              <MDTypography variant="h8">Name:</MDTypography>
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              // value={"Enter Product Name"}
              onChange={(e) => HandleChange(e)}
              required
            />
          </div>
          <div>
            <label>
              <MDTypography variant="h8">Description:</MDTypography>
            </label>
            <input
              type="text"
              name="productDescription"
              // value={"Enter Product Price "}
              placeholder="Enter Product Description"
              onChange={(e) => HandleChange(e)}
              required
            />
          </div>
          <div>
            <label>
              <MDTypography variant="h8">Price:</MDTypography>
            </label>
            <input
              type="text"
              name="productPrice"
              placeholder="Enter Product Price"
              // value={"Enter Product Name"}
              onChange={(e) => HandleChange(e)}
              required
            />
          </div>

          <div>
            <label>
              <MDTypography variant="h8">Quantity:</MDTypography>
            </label>
            <input
              type="text"
              name="productQuantity"
              placeholder="Enter Product Quantity"
              // value={"Enter Product Name"}
              onChange={(e) => HandleChange(e)}
              required
            />
          </div>
          <div>
            <label>
              <MDTypography variant="h8">Expirary Date:</MDTypography>
            </label>
            <input
              type="text"
              name="productExpirary"
              placeholder="Enter Product Expirary Date"
              // value={"Enter Product Expirary Date"}
              onChange={(e) => HandleChange(e)}
              required
            />
          </div>
        </form>
        <MDButton variant="gradient" color="info" fullWidth>
          ADD
        </MDButton>
      </MDBox>
    </Card>
  );
};

export default Add;
