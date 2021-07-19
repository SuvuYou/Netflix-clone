import { Accordion } from "../components";
import faqs from "../fixtures/faqs.json";
import { OptForm } from "../components";

export default function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.MainTitle>Frequently Asked Questions</Accordion.MainTitle>
      {faqs.map((item) => {
        return (
          <Accordion.Frame key={item.id}>
            <Accordion.Rectangle>
              <Accordion.Title>{item.header}</Accordion.Title>
            </Accordion.Rectangle>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Frame>
        );
      })}
      <OptForm>
        <OptForm.Input placeholder="Email adress"></OptForm.Input>
        <OptForm.Btn>Try it now</OptForm.Btn>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
