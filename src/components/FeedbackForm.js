import React, { Component } from "react";
// import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Spinner from "./Spinner";
import Radio from '@mui/joy/Radio';
import Divider from '@mui/joy/Divider';
import Table from '@mui/joy/Table';


class FeedbackForm extends Component {
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
      console.log(error)
      alert('Error in Fetching data')
    }
   
  }
  handleChange = (index, choice) => {
    const updatedChoices = [...this.state.choices];
    updatedChoices[index] = choice;
    this.setState({ choices: updatedChoices });
  };
  handleSubmit = (e) => {
    const { choices, Questions } = this.state;
    if(choices.length === Questions.length){
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
    }else{
      alert('Please Mark all the Fields')
    }
 
  };
  render() {
    const { choices, loading } = this.state;
    return (
      <div className="w-11/12 flex flex-col items-center justify-center mt-6 max-w-full mx-auto">
        <div className="w-full flex flex-col  md:flex-row  items-center md:justify-between p-9  mx-auto">
          <div className="w-full md:max-w-[40%]">
            <img
              src={this.state.imgurl}
              className="w-full"
              loading="lazy"
              alt="Company-logo"
            ></img>
          </div>
          <div className="border-b-4 border-red-600">
            <div>
              <p className="text-4xl lg:text-6xl font-bold">Feedback Form</p>
            </div>
          </div>
        </div>
        <Divider></Divider>
        <div className="w-full flex flex-col items-center md:p-9 p-2   border-gray-500 mt-4 h-full  max-w-[100%]  mx-auto shadow-lg">
          <div className="w-full">
            <p className="font-bold text-1xl text-black">
              Please Provide your Feedback....
            </p>
          </div>
          <div className="mt-4 w-full">
            {loading && <Spinner />}
            {this.state.Questions?.map((question, index) => (
              <div
                className={`flex md:flex-row flex-col items-center justify-between md:gap-x-28
              w-full border border-gray-100 bg-gray ${
                index % 2 === 0 ? "bg-slate-100" : "bg-white"
              }`}
                key={index}
              >
                <div className="flex items-center justify-start w-full p-5 max-w-[50%] font-semibold">
                  {`${index + 1}. ${question}`}
                </div>
                <div className="flex flex-row items-center justify-center gap-16 p-7">
                  {this.state.Choices[index].map((choice, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center flex-wrap"
                    >
                      <Radio
                        id={choice}
                        onChange={() => this.handleChange(index, choice)}
                        value={choice}
                        name={choices[index]}
                        checked={choices[index] === choice}
                        required
                        label={choice}
                        variant="soft"
                        color="primary"
                      />
                
                     
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex items-center w-full justify-center mt-8 mb-5">
          <div>
            <Button
              variant="contained"
              color="success"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default FeedbackForm;
