import React from "react";
import "./FlipClock.css";

class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayes: 11,
      dayesShuffle: true,
      hours: 10,
      hoursShuffle: true,
      minutes: 20,
      minutesShuffle: true,
      seconds: 23,
      secondsShuffle: true,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 960);
  }
  updateTime() {
    var weddingDate = new Date("10/11/2023 19:00");
    var today = new Date().getTime();

    //<<!---- set time units ---->>
    var Difference_In_Time = weddingDate.getTime() - today;

    var Difference_In_Days = Math.floor(
      Difference_In_Time / (1000 * 60 * 60 * 24)
    );
    var Difference_In_hours = Math.floor(
      (Difference_In_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var Difference_In_minutes = Math.floor(
      (Difference_In_Time % (1000 * 60 * 60)) / (1000 * 60)
    );
    var Difference_In_seconds = Math.floor(
      (Difference_In_Time % (1000 * 60)) / 1000
    );
    // on dayes chanage, update dayes and shuffle state

    if (this.state.dayes !== Difference_In_Days) {
      const dayesShuffle = !this.state.dayesShuffle;
      this.setState({
        dayes: Difference_In_Days,
        dayesShuffle,
      });
    }
    // on hour chanage, update hours and shuffle state

    if (this.state.hours !== Difference_In_hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours: Difference_In_hours,
        hoursShuffle,
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (this.state.minutes !== Difference_In_minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes: Difference_In_minutes,
        minutesShuffle,
      });
    }
    // on second chanage, update seconds and shuffle state
    if (this.state.seconds !== Difference_In_seconds) {
      const secondsShuffle = !this.state.secondsShuffle;

      this.setState({
        seconds:
        Difference_In_seconds,
        secondsShuffle,
      });
    }
  }
  render() {
    // state object destructuring
    const {
      dayes,
      hours,
      minutes,
      seconds,
      dayesShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div className={"flipClock"}>
        <div>
          <FlipUnitContainer
            unit={"dayes"}
            digit={dayes}
            shuffle={dayesShuffle}
          />
        </div>
        <div>
          <FlipUnitContainer
            unit={"hours"}
            digit={hours}
            shuffle={hoursShuffle}
          />
        </div>
        <div>
          <FlipUnitContainer
            unit={"minutes"}
            digit={minutes}
            shuffle={minutesShuffle}
          />
        </div>
        <div>
          <FlipUnitContainer
            unit={"seconds"}
            digit={seconds}
            shuffle={secondsShuffle}
          />
        </div>
      </div>
    );
  }
}

export default FlipClock;
// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";
  console.log(dd["dayes"]);
  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
      <h4>{dd[unit]}</h4>
    </div>
  );
};

export const dd = {
  dayes: "ימים",
  hours: "שעות",
  minutes: "דקות",
  seconds: "שניות",
};
