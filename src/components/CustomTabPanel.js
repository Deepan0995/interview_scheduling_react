import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Autocomplete,
  Button,
  Checkbox,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";

import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreTimeOutlinedIcon from "@mui/icons-material/MoreTimeOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { AccessTime, CalendarMonth } from "@mui/icons-material";
const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    "text-align": "start",
  };
};

const BasicTabs = () => {
  const [value, setValue] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [startTime, setStartTime] = useState(dayjs().format("HH:mm"));
  const [endTime, setEndTime] = useState(dayjs().format("HH:mm"));
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedInterviewer, setSelectedInterviewer] = useState(null);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  const [selectedInterviewers, setSelectedInterviewers] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleStartTimeChange = (newTime) => {
    setStartTime(newTime);
  };

  const handleEndTimeChange = (newTime) => {
    setEndTime(newTime);
  };
  const jobOptions = [
    "Executive Assistant to the CEO ",
    "Digital Marketing",
    " Software Developer",
    "Software Developer- ReactJs",
    "Video Editing",
  ];
  const Candidates = [
    "Ajay pal",
    "Saran kumar",
    "Sara",
    "Jenifer",
    "Christopher",
    "Rohit Diwakar",
  ];
  const interviewer = [
    "Emily ",
    "Christopher",
    "Chri wilson",
    "Jason",
    "Jacob willer",
    "Jenney",
  ];

  const handleChangeTitle = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setSelectedMessage(event.target.value);
  };

  const handleInterviewersChange = (event, newValues) => {
    setSelectedInterviewer(newValues);
  };
  const handleInterviewerChange = (event, newValues) => {
    setSelectedInterviewers(newValues);
  };
  const textFieldStyle = {
    color: "black",
  };

  const label = {
    inputProps: { "aria-label": "Notify candidate & interviewer via email" },
  };
  const handleSubmit = () => {
    console.log("Title:", selectedTitle);
    console.log("Job:", selectedJob);
    console.log("Candidate:", selectedCandidate);
    console.log("Date:", selectedDate.format("DD MMM YYYY"));
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);  
    console.log("Interviewer:", selectedInterviewer);
    console.log("Message:", selectedMessage);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography fontSize={"16px"} marginLeft={2} fontWeight={"bold"}>
        Schedule Interview
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Single attendee"
            style={{ textTransform: "none" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Multiple attendees"
            style={{ textTransform: "none" }}
            {...a11yProps(1)}
          />
          <Tab
            label="Multi schedule"
            style={{ textTransform: "none" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container display={"flex"} justifyContent={"space-between"}>
          <Grid item xs={12} lg={10} display={"flex"}>
            <Grid item lg={0.5}>
              <CreateOutlinedIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <TextField
                sx={textFieldStyle}
                size="small"
                InputProps={{ placeholder: "add title" }}
                fullWidth
                onChange={handleChangeTitle}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <WorkOutlineOutlinedIcon
                sx={{ mt: 1 }}
                style={{ color: "#6A6A6A" }}
              />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                options={jobOptions}
                value={selectedJob}
                onChange={(event, newValue) => setSelectedJob(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose job"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <PersonAddAltIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                options={Candidates}
                value={selectedCandidate}
                onChange={(event, newValue) => setSelectedCandidate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose Candidate"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <MoreTimeOutlinedIcon
                sx={{ mt: 1 }}
                style={{ color: "#6A6A6A" }}
              />
            </Grid>
            <Grid item lg={8} display={"flex"} justifyContent={"space-between"}>
              <Grid item xs={3.5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    textField={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={dayjs(selectedDate).format("DD MMM YYYY")}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="calendar"
                              onClick={params.openPicker}
                            >
                              <CalendarMonth />
                            </IconButton>
                          ),
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="DD MMM YYYY"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={3.5} paddingLeft={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    sx={textFieldStyle}
                    value={startTime}
                    onChange={handleStartTimeChange}
                    textField={(props) => (
                      <TextField
                        {...props}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={startTime}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="time"
                              onClick={props.openPicker}
                            >
                              <AccessTime />
                            </IconButton>
                          ),
                          style: {
                            borderColor: "#000",
                            width: "100%",
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="HH:mm"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={0.5} paddingLeft={7}>
                <Typography variant="h6" textAlign={"center"}>
                  to
                </Typography>
              </Grid>
              <Grid item lg={3.5} paddingLeft={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={endTime}
                    onChange={handleEndTimeChange}
                    textField={(props) => (
                      <TextField
                        {...props}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={endTime}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="time"
                              onClick={props.openPicker}
                            >
                              <AccessTime />
                            </IconButton>
                          ),
                          style: {
                            borderColor: "#000", 
                            width: "100%", 
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="HH:mm"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <PersonAddAltIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                options={interviewer}
                value={selectedInterviewer}
                onChange={handleInterviewersChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose Interviewer"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={8}>
              <Typography fontSize={"12px"} fontWeight={"bold"}>
                Message(optional)
              </Typography>
              <TextField
                sx={textFieldStyle}
                size="small"
                rows={3}
                fullWidth
                multiline
                onChange={handleMessageChange}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={8} display={"flex"} flexDirection={"row"}>
              <Checkbox {...label} />
              <Typography fontSize={"10px"} paddingTop={"13px"}>
                Notify candidate & interviewer via email
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={10} paddingLeft={5} mt={2}>
            <Button
              variant="contained"
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Shedule interview
            </Button>
          </Grid>
        </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Grid container display={"flex"} justifyContent={"space-between"}>
          <Grid item  xs={12} lg={10} display={"flex"}>
            <Grid item lg={0.5}>
              <CreateOutlinedIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <TextField
                sx={textFieldStyle}
                size="small"
                InputProps={{ placeholder: "add title" }}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <WorkOutlineOutlinedIcon
                sx={{ mt: 1 }}
                style={{ color: "#6A6A6A" }}
              />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                multiple
                options={jobOptions}
                value={selectedJobs}
                onChange={(event, newValue) => setSelectedJobs(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose job"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <PersonAddAltIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                multiple
                options={Candidates}
                value={selectedCandidates}
                onChange={(event, newValue) => setSelectedCandidates(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose Candidate"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <MoreTimeOutlinedIcon
                sx={{ mt: 1 }}
                style={{ color: "#6A6A6A" }}
              />
            </Grid>
            <Grid item lg={8} display={"flex"} justifyContent={"space-between"}>
              <Grid item xs={3.5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    textField={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={dayjs(selectedDate).format("DD MMM YYYY")} 
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="calendar"
                              onClick={params.openPicker}
                            >
                              <CalendarMonth />
                            </IconButton>
                          ),
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="DD MMM YYYY"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={3.5} paddingLeft={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={startTime}
                    onChange={handleStartTimeChange}
                    textField={(props) => (
                      <TextField
                        {...props}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={startTime}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="time"
                              onClick={props.openPicker}
                            >
                              <AccessTime />
                            </IconButton>
                          ),
                          style: {
                            borderColor: "#000", 
                            width: "100%",
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="HH:mm"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={0.5} paddingLeft={7}>
                <Typography variant="h6" textAlign={"center"}>
                  to
                </Typography>
              </Grid>
              <Grid item lg={3.5} paddingLeft={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={endTime}
                    onChange={handleEndTimeChange}
                    textField={(props) => (
                      <TextField
                        {...props}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={endTime}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="time"
                              onClick={props.openPicker}
                            >
                              <AccessTime />
                            </IconButton>
                          ),
                          style: {
                            borderColor: "#000",
                            width: "100%", 
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="HH:mm"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <PersonAddAltIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                multiple
                options={interviewer}
                value={selectedInterviewers}
                onChange={handleInterviewerChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose Interviewer"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid item lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={8}>
              <Typography fontSize={"12px"} fontWeight={"bold"}>
                Message(optional)
              </Typography>
              <TextField
                sx={textFieldStyle}
                size="small"
                rows={3}
                fullWidth
                multiline
              ></TextField>
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={8} display={"flex"} flexDirection={"row"}>
              <Checkbox {...label} />
              <Typography fontSize={"10px"} paddingTop={"13px"}>
                Notify candidate & interviewer via email
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={10} paddingLeft={5} mt={2}>
            <Button variant="contained" style={{ textTransform: "none" }}>
              Shedule interview
            </Button>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container display={"flex"} justifyContent={"space-between"}>
          <Grid item xs={12} lg={10} display={"flex"}>
            <Grid item xs={2}  lg={0.5}>
              <CreateOutlinedIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item xs={10} lg={8}>
              <TextField
                sx={textFieldStyle}
                size="small"
                InputProps={{ placeholder: "add title" }}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={10} display={"flex"} marginTop={2}>
            <Grid item xs={2}  lg={0.5}>
              <WorkOutlineOutlinedIcon
                sx={{ mt: 1 }}
                style={{ color: "#6A6A6A" }}
              />
            </Grid>
            <Grid item xs={10}  lg={8}>
              <Autocomplete
                options={jobOptions}
                value={selectedJob}
                onChange={(event, newValue) => setSelectedJob(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose job"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={10} display={"flex"} marginTop={2}>
            <Grid item xs={2} lg={0.5}>
              <PersonAddAltIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item xs={10} lg={8}>
              <Autocomplete
                options={Candidates}
                value={selectedCandidate}
                onChange={(event, newValue) => setSelectedCandidate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose Candidate"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <MoreTimeOutlinedIcon
                sx={{ mt: 1 }}
                style={{ color: "#6A6A6A" }}
              />
            </Grid>
            <Grid item lg={8} display={"flex"} justifyContent={"space-between"}>
              <Grid item xs={3.5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    textField={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={dayjs(selectedDate).format("DD MMM YYYY")}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="calendar"
                              onClick={params.openPicker}
                            >
                              <CalendarMonth />
                            </IconButton>
                          ),
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="DD MMM YYYY"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={3.5} paddingLeft={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={startTime}
                    onChange={handleStartTimeChange}
                    textField={(props) => (
                      <TextField
                        {...props}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={startTime}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="time"
                              onClick={props.openPicker}
                            >
                              <AccessTime />
                            </IconButton>
                          ),
                          style: {
                            borderColor: "#000",
                            width: "100%", 
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="HH:mm"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item lg={0.5} paddingLeft={7}>
                <Typography variant="h6" textAlign={"center"}>
                  to
                </Typography>
              </Grid>
              <Grid item lg={3.5} paddingLeft={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={endTime}
                    onChange={handleEndTimeChange}
                    textField={(props) => (
                      <TextField
                        {...props}
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={endTime}
                        InputProps={{
                          startAdornment: (
                            <IconButton
                              edge="end"
                              size="large"
                              aria-label="time"
                              onClick={props.openPicker}
                            >
                              <AccessTime />
                            </IconButton>
                          ),
                          style: {
                            borderColor: "#000", 
                            width: "100%", 
                          },
                        }}
                      />
                    )}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: false,
                      },
                      openPickerButton: {
                        color: "dark",
                      },
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    format="HH:mm"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}>
              <PersonAddAltIcon sx={{ mt: 1 }} style={{ color: "#6A6A6A" }} />
            </Grid>
            <Grid item lg={8}>
              <Autocomplete
                options={interviewer}
                value={selectedInterviewer}
                onChange={handleInterviewersChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Choose Interviewer"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} lg={10} display={"flex"} marginTop={2}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={8}>
              <Typography fontSize={"12px"} fontWeight={"bold"}>
                Message(optional)
              </Typography>
              <TextField
                sx={textFieldStyle}
                size="small"
                rows={3}
                fullWidth
                multiline
              ></TextField>
            </Grid>
          </Grid>
          <Grid item lg={10} display={"flex"}>
            <Grid item lg={0.5}></Grid>
            <Grid item lg={6} display={"flex"} flexDirection={"row"}>
              <Checkbox {...label} />
              <Typography fontSize={"10px"} paddingTop={"13px"}>
                Notify candidate & interviewer via email
              </Typography>
            </Grid>
            <Grid item lg={2} justifyContent={"flex-end"} display={"flex"}>
              <Button
                sx={{
                  color: "#856CCA",
                  textTransform: "none",
                  fontSize: 10,
                  ml: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ marginRight: 1, fontSize: 12 }}
                >
                  Add
                </Typography>
                <AddBoxIcon sx={{ fontSize: 14 }} />
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={7}
            
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            paddingLeft={5}
            mt={1}
          >
            <Grid item>
              <Button variant="contained" style={{ textTransform: "none" }}>
                Shedule interview
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
