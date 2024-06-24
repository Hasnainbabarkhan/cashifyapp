import React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import sliderOne from '../assets/imgOne.png';
import sliderTwo from '../assets/imgTwo.png';
import sliderThree from '../assets/imgThree.png';
import sliderFour from '../assets/imgFour.png';
import sliderFive from '../assets/imgFive.png';
import sliderSix from '../assets/imgSix.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: sliderOne,
  },
  {
    imgPath: sliderTwo,
  },
  {
    imgPath: sliderThree,
  },
  {
    imgPath: sliderFour,
  },
  {
    imgPath: sliderFive,
  },
  {
    imgPath: sliderSix,
  },
];

const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Paper
      square
      elevation={0}
      sx={{
        maxWidth: 1150,
        margin:'auto',
        backgroundColor: "transparrent",
        color: "black",
        textAlign: "center",
        marginTop: 7,
      }}
    >
      <Typography>{tutorialSteps[activeStep].label}</Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 5 ? (
              <img
                src={step.imgPath}
                alt={step.label}
                style={{ width: "100%", height: "350px" }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Paper>
  );
};

export default SwipeableTextMobileStepper;
