import TKZNDropownButton from "components/TKZNDropownButton";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import "./add.css";
const Add = () => {
  return (
    <Card className="add">
      <MDBox p={2}>
        <MDTypography className="addHeading" variant="h5">
          ADD PRODUCT FORM
        </MDTypography>

        <TKZNDropownButton />

        <form>
          <div>
            <label>
              <MDTypography className="addHeading" variant="h8">
                Name:
              </MDTypography>
            </label>
            <input
              type="text"
              name="productName"
              value={"Enter Product Name"}
              onChange={"##"}
              required
            />
          </div>
          <div>
            <label>
              <MDTypography className="addHeading" variant="h8">
                Description:
              </MDTypography>
            </label>
            <input
              type="text"
              name="productName"
              value={"Enter Product Price "}
              onChange={"##"}
              required
            />
          </div>
          <div>
            <label>
              <MDTypography className="addHeading" variant="h8">
                Price:
              </MDTypography>
            </label>
            <input
              type="text"
              name="productName"
              value={"Enter Product Name"}
              onChange={"##"}
              required
            />
          </div>

          <div>
            <label>
              <MDTypography className="addHeading" variant="h8">
                Quantity:
              </MDTypography>
            </label>
            <input
              type="text"
              name="productName"
              value={"Enter Product Name"}
              onChange={"##"}
              required
            />
          </div>
          <div>
            <label>
              <MDTypography className="addHeading" variant="h8">
                Expirary Date:
              </MDTypography>
            </label>
            <input
              type="text"
              name="productName"
              value={"Enter Product Expirary Date"}
              onChange={"##"}
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
