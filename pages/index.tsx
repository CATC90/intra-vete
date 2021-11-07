import * as React from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useCreateDocument } from "../utils/useFirestore";

const IndexPage = () => {
  const createDocument = useCreateDocument();
  return (
    <Container maxWidth="lg">
      <Box py={3}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<MailOutlineIcon />}
              onClick={() => createDocument("users", { name: "Isabel" })}
            >
              Post a user
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default IndexPage;
