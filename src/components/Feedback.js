import React, { Component } from "react";
import Spinner from "./Spinner";
import Radio from "@mui/joy/Radio";
import Divider from "@mui/joy/Divider";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import { Box } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/joy/Grid";
import ContactForm from "./ContactForm";




export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Questions: [],
      Choices: [],
      imgurl: "",
      choices: [],
      loading: false,
    };
  }
  async componentDidMount() {
    try {
      let url =
        "https://brijfeedback.pythonanywhere.com/api/get-feedback-questions/?unitID=1";
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        Questions: data.feedbackQuestions,
        Choices: data.choices,
        imgurl: data.companyLogo,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      alert("Error in Fetching data");
    }
  }

  handleChange = (index, choice) => {
    const updatedChoices = [...this.state.choices];
    updatedChoices[index] = choice;
    this.setState({ choices: updatedChoices });
  };
  handleSubmit = (e) => {
    const { choices, Questions } = this.state;
    this.setState({ open: true });
    if (choices.length === Questions.length) {
      this.setState({
        loading: true,
      });
      const data = {
        feedback: {
          Questions,
          choices,
        },
      };
      this.setState({
        choices: [],
        loading: false,
      });
      alert("Submitted Succesfully , Check Console Window");
      console.log(data);
    } else {
      alert("Please Mark all the Fields");
    }
  };

  render() {
    const { choices, loading } = this.state;
    return (
      <Sheet
        variant="outlined"
        color="primary"
        sx={{
          p: 4,
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          width: "91.67%",
          marginX: "auto",
          marginY: "4rem",
        }}
      >
        {/* className="w-full flex flex-col  md:flex-row  items-center md:justify-between p-9  mx-auto" */}
        <Grid
          container
          spacing={2}
          columns={{ sm: 8, md: 16 }}
          sx={{ flexWrap: "wrap" }}
        >
          <Grid xs={8}>
            <Box sx={{ width: 250 }}>
              <img src={this.state.imgurl} loading="lazy" alt="Company Logo"></img>
            </Box>
          </Grid>

          {/* sx = {{borderBottom:4,borderBottomColor:"red"}} */}
          <Grid xs={8} justifyContent="center" alignItems="center">
            <Box>
              <Box>
                <Typography variant="plain" level="h1">
                  Customer Satisfaction Survey
                </Typography>
                {/* <p className="text-4xl lg:text-6xl font-bold">Feedback Form</p> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 2 }}>FeedbackForm</Divider>
        {loading && <Spinner />}
        <Sheet
          color="neutral"
          variant="plain"
          sx={{
            display: { md: "flex" },
            width: "100%",
            borderRadius: "lg",
            gap: { sm: "50px", lg: "10px" },
            minHeight: 0,
            marginTop: 8,
            flexDirection: { sm: "column", lg: "row" },
            rowGap: "100px",
          }}
        >
          <Box
            sx={{
              "@media screen and (max-width:800px)": {
                marginBottom: "20px",
              },
              "@media screen and (min-width:800px)": {
                marginBottom: "0px",
              },
            }}
          >
            <ContactForm/>
          </Box>

          <Table
            aria-label="basic table"
            variant="soft"
            color="neutral"
            stripe={"odd"}
            hoverRow
            sx={{
              "--TableCell-headBackground":
                "var(--joy-palette-background-level1)",
              "--Table-headerUnderlineThickness": "1px",
              "--TableRow-hoverBackground":
                "var(--joy-palette-background-level1)",
              "--TableCell-paddingY": "4px",
              "--TableCell-paddingX": "4px",
              "@media screen and (max-width:400px)": {
                "--TableCell-paddingX": "3px",
              },

            }}
          >
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th style={{ width: "30%", fontWeight: "bold" }}>Questions</th>
                {this.state.Choices[0]?.map((choice, idx) => (
                  <th key={idx} style={{ fontWeight: "bold" }}>
                    {choice}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ padding: 4 }}>
              {this.state.Questions?.map((ques, idx) => (
                <tr>
                  <td style={{ fontWeight: "normal" }}>{ques}</td>
                  {this.state.Choices[idx]?.map((choice, index) => (
                    <td key={index}>
                      <Radio
                        id={choice}
                        onChange={() => this.handleChange(idx, choice)}
                        value={choice}
                        name={choices[idx]}
                        checked={choices[idx] === choice}
                        required
                        variant="outlined"
                        color="primary"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
        <Box>
          <Button
            variant="solid"
            onClick={this.handleSubmit}
            color="success"
            sx={{ marginTop: 2 }}
            endDecorator={<NavigateNextIcon></NavigateNextIcon>}
          >
            Submit
          </Button>
        </Box>
      </Sheet>
    );
  }
}
