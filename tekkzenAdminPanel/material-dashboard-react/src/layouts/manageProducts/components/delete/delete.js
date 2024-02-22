import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import TKZNDropownButton from "components/TKZNDropownButton";
import { useState } from "react";
const Delete = () => {
  const [addFormData, setAddFormData] = useState({});
  const [fetchData, setFetchData] = useState(false);
  const [functionType, setfunctionType] = useState("Search");
  const HandleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();

    if (functionType == "Search") {
      if (addFormData.productType === undefined) {
        return alert("Please select Product Type");
      }
    }
    if (functionType == "Delete") {
      return setfunctionType("Search");
    }

    setfunctionType("Delete");
    console.log(addFormData);
  };
  return (
    <Card className="add">
      <MDBox p={2}>
        <MDTypography className="addHeading" variant="h5">
          DELETE PRODUCT FORM
        </MDTypography>

        <form className="addForm">
          <div>
            <label>
              <MDTypography variant="h8">Product Type:</MDTypography>
            </label>
            <div className="aaaaa">
              <TKZNDropownButton CallbackHandleChange={HandleChange} />
            </div>
          </div>
          <div>
            <label>
              <MDTypography variant="h8">ID:</MDTypography>
            </label>
            <input
              type="text"
              name="productID"
              placeholder="Enter Product ID"
              onChange={(e) => HandleChange(e)}
              required
            />
          </div>
          {/* Fetched Data */}
          {functionType == "Search" ? (
            <></>
          ) : (
            <>
              <div>
                <label>
                  <MDTypography variant="h8">Name:</MDTypography>
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Enter Product Name"
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
            </>
          )}
        </form>
        <MDButton variant="gradient" onClick={(e) => HandleSubmit(e)} color="error" fullWidth>
          {functionType}
        </MDButton>
      </MDBox>
    </Card>
  );
};
export default Delete;
