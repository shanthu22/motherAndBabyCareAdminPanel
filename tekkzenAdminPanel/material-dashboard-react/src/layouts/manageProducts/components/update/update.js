import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
const Update = () => {
  return (
    <Card>
      <MDBox p={2}>
        <MDTypography className="addHeading" variant="h5">
          UPDATE PRODUCT FORM
        </MDTypography>
        <h2>Hiiii UPDATEE</h2>

        <MDButton variant="gradient" color="warning" fullWidth>
          ADD
        </MDButton>
      </MDBox>
    </Card>
  );
};
export default Update;
