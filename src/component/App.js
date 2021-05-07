import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.neutral + this.state.good + this.state.bad;

    let countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countPositiveFeedbackPercentage ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={countTotalFeedback}
              positive={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
