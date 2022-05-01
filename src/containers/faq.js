import faqdata from "../fixtures/faqs.json";
import React from "react";
import { Accordian } from "../components";
import OptForm from "../components/optform";
export default function FaqContainer() {
  return (
    <Accordian>
      <Accordian.Title>
        Frequently Asked Questions
        {faqdata.map((item, index) => (
          <Accordian.Item key={index}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian.Title>
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email Address"></OptForm.Input>
        <OptForm.Button>Try it Now</OptForm.Button>
      </OptForm>
    </Accordian>
  );
}
