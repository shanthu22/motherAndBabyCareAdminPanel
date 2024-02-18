import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
const Delete = () => {
  return (
    <Card>
      <MDBox p={2}>
        <MDTypography className="addHeading" variant="h5">
          DELETE PRODUCT FORM
        </MDTypography>
        <h2>Hiiii DELETEE</h2>

        <MDButton variant="gradient" color="error" fullWidth>
          ADD
        </MDButton>
      </MDBox>
    </Card>
  );
};
export default Delete;
