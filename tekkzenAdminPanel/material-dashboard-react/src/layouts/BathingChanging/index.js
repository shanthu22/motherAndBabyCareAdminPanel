import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";
import MDBox from "components/MDBox";
import ReplayIcon from "@mui/icons-material/Replay";
import MDAlert from "components/MDAlert";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";
import TKZNDropownButton from "components/TKZNDropownButton";
const BathingChanging = () => {
  const options = ["Create a merge commit", "Squash and merge", "Rebase and merge"];
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid item container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Card>
            <MDBox p={2} lineHeight={0}>
              <MDTypography variant="h5">Manage Products</MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Notifications on this page use Toasts from Bootstrap. Read more details here.
              </MDTypography>
            </MDBox>
            <MDBox p={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton variant="gradient" color="success" fullWidth>
                    Reload <ReplayIcon />
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton variant="gradient" color="info" fullWidth>
                    Add
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton variant="gradient" color="warning" fullWidth>
                    Update
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton variant="gradient" color="error" fullWidth>
                    Delete
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <MDBox p={2}>
              <TKZNDropownButton />
            </MDBox>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <MDBox p={2}>
              <MDTypography variant="h5">Alerts</MDTypography>
            </MDBox>
            <MDBox pt={2} px={2}>
              <MDAlert color="primary" dismissible></MDAlert>
              <MDAlert color="secondary" dismissible></MDAlert>
              <MDAlert color="success" dismissible></MDAlert>
              <MDAlert color="error" dismissible></MDAlert>
              <MDAlert color="warning" dismissible></MDAlert>
              <MDAlert color="info" dismissible></MDAlert>
              <MDAlert color="light" dismissible></MDAlert>
              <MDAlert color="dark" dismissible></MDAlert>
            </MDBox>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={0}
              mt={0}
              py={3}
              px={2}
              variant="gradient"
              bgColor="warning"
              borderRadius="lg"
              coloredShadow="warning"
            >
              <MDTypography variant="h6" color="white">
                Authors Table
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              {/* <DataTable
                      table={{ columns, rows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    /> */}
            </MDBox>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Projects Table
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              {/* <DataTable
                      table={{ columns: pColumns, rows: pRows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    /> */}
            </MDBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
};
export default BathingChanging;
