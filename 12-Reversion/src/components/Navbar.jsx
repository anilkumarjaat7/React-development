// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Navbar() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="full Name" variant="outlined" />
      <TextField id="filled-basic" label="Full name" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
  //   return (
  //     <Stack direction="row" spacing={4}>
  //       <Avatar alt="Remy Sharp" src="one.png" />
  //       <Avatar alt="Travis Howard" src="two.png" />
  //       <Avatar alt="Cindy Baker" src="three.png" />
  //     </Stack>
  // <Button variant="contained">Hello world</Button>
  // <div className="gird">
  //   <h1 className="logo">Devzi </h1>

  //   <ul className="nav-btn">
  //     <li>Home</li>
  //     <li>About</li>
  //     <li>Service</li>
  //     <li>Contact</li>
  //   </ul>
  //   <Button variant="contained">Hello world</Button>
  // </div>
  //   );
}

export default Navbar;
