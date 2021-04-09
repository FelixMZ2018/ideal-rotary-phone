import React, { useState, setState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Segment,
  TextArea,
} from "semantic-ui-react";
import error_image from "images/Error.gif";
import { useHistory } from "react-router-dom";

export default function ErrorScreen(props) {
  const history = useHistory();
  const [ErrorDetail, setErrorDetail] = useState(false);

  function errorMessage() {
    if (!props.location || !props.location.state) {
      return "Something went wrong";
    }
    return props.location.state.error;
  }
  function stacktrace() {
    if (!props.location || !props.location.state) {
      return "Something went wrong";
    }
    return props.location.state.stacktrace;
  }
  function submitError() {
    console.log("Sent off the bug report!");
  }
  const Details = () => (
    <div>
      <p>In addition we are collecting the following information:</p>
      <div className="ui form">
        <div className="one field">
          <div className="field">
            <label>Error Message</label>
            <input placeholder={errorMessage(props)} readonly="" type="text" />
          </div>
          <div class="field">
            <label>Stacktrace</label>
            <TextArea placeholder={stacktrace(props)} readonly="" type="text" />
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
  return (
    <Container>
      <Segment>
        <Image
          src={error_image}
          size="large"
          centered
          style={{ padding: "20px" }}
        />
        <div className="ErrorPage">
          <h1>Ooooops !</h1>
          <p>
            We are sorry this happened but rest assured we are working on fixing
            it
          </p>
          <p>
            If you run into this error again please let us know what you did up
            to this point
          </p>
          <Form>
            <Form.Field>
              <label>Last steps:</label>
              <input placeholder="e.g.: Tried adding a new centrifuge" />
            </Form.Field>
            {ErrorDetail ? <Details /> : null}

            <Button
              onClick={() => {
                history.goBack();
              }}
            >
              Go back
            </Button>
            <Button
              onClick={() => {
                setErrorDetail(!ErrorDetail);
              }}
            >
              Details
            </Button>
            <Button onClick={submitError}>Submit</Button>
          </Form>
        </div>
      </Segment>
    </Container>
  );
}
