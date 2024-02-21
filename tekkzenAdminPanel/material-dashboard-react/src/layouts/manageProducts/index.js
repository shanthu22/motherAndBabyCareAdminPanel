import React, { useState } from "react";
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
// import TKZNDropownButton from "components/TKZNDropownButton";
import Add from "./components/add/add";
import Delete from "./components/delete/delete";
import Update from "./components/update/update";
const ManageProducts = () => {
  const optionTypeElements = {
    Add: (
      <Grid item xs={12} lg={8}>
        <Add />
      </Grid>
    ),
    Update: (
      <Grid item xs={12} lg={8}>
        <Update />
      </Grid>
    ),
    Delete: (
      <Grid item xs={12} lg={8}>
        <Delete />
      </Grid>
    ),
  };
  const [optionType, setOptionType] = useState(null);

  const handleOptionClick = (e) => {
    console.log(e.target.textContent);
    setOptionType(e.target.textContent);
  };
  // const options = ["Create a merge commit", "Squash and merge", "Rebase and merge"];
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid item container pt={3} pb={3} spacing={3} justifyContent="center">
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
                  <MDButton
                    variant="gradient"
                    color="success"
                    fullWidth
                    onClick={(e) => handleOptionClick(e)}
                  >
                    Reload <ReplayIcon />
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={(e) => handleOptionClick(e)}
                  >
                    Add
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton
                    variant="gradient"
                    color="warning"
                    fullWidth
                    onClick={(e) => handleOptionClick(e)}
                  >
                    Update
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDButton
                    variant="gradient"
                    color="error"
                    fullWidth
                    onClick={(e) => handleOptionClick(e)}
                  >
                    Delete
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        </Grid>

        {optionTypeElements[optionType]}
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
            <MDBox pt={3}></MDBox>
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
export default ManageProducts;
