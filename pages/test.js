import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

export default function test(props) {
  const [search, setSearch] = useState(false);
  return (
    <div>
      <SearchBar desc="Search code " />
      {/* {search == true ? <SearchResult /> : <SearchResult />} */}
      <SearchResult />
    </div>
  );

  function SearchBar(props) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          mt: 20,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label={props.desc}
          variant="outlined"
        />
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleClick}>
          Search
        </Button>
      </Container>
    );
  }

  function SearchResult() {
    const rows = [
      { id: 1, col1: "Hello", col2: "World" },
      { id: 2, col1: "DataGridPro", col2: "is Awesome" },
      { id: 3, col1: "MUI", col2: "is Amazing" },
    ];
    const columns = [
      { field: "col1", headerName: "Column 1", width: 150 },
      { field: "col2", headerName: "Column 2", width: 150 },
    ];

    return (
      <Container
        // style={{
        //   height: 200,
        //   width: '100%'
        // }}
        sx={{
          mt: 3,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ alignSelf: "center" }}
          style={{
            height: 400,
            width: "50%",
          }}
        />
      </Container>
    );
  }

  function handleClick() {
    setSearch((prevSearch) => (prevSearch = !prevSearch));
  }

  function Result() {
    return <h1>asdasdasdasd</h1>;
  }

  function ResultB() {
    return <h1>asdasdasdasdasdasdasdasdasdBbBbBBb</h1>;
  }
}
