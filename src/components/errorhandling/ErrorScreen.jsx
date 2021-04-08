import React from 'react'
import { Button, Container,Form,Image,Segment, TextArea } from 'semantic-ui-react'
import error_image from 'images/Error.gif'
import { Input } from '@material-ui/core'

export default function ErrorScreen(props) {
    console.log(props)
    const error_message = ""

   /// const error_message = props.location.state.error
   /// const stacktrace = props.location.state.stacktrace
    function errorMessage(props){
        if (props.location === undefined) {
            return "Something went wrong"
        } else {
            return props.location.state.error
        }
    }

    function stacktrace(props){
        if (props.location === undefined) {
            return "Something went wrong"
        } else {
            return props.location.state.stacktrace
        }
    }
    return (
        <Container>
        <Segment>
            <Image src={error_image} size='large' centered style={{ padding: '20px' }}/>
            <h1>Ooooops !</h1>
            <p>We are sorry this happened but rest assured we are working on fixing it</p>
            <p>If you run into this error again please let us know what you did up to this point</p>
            <Form>
            <Form.Field>
                 <label>Last steps:</label>
                 <input placeholder='Tried adding a new centrifuge' />
             </Form.Field>
            <p>In addition we are collecting the following information:</p>
            <div class="ui form">
  <div class="one field">
    <div class="field">
      <label>Error Message</label>
      <input placeholder={errorMessage(props)} readonly="" type="text"/>
    </div>
    <div class="field">
      <label>Last Name</label>
      <TextArea placeholder={stacktrace(props)} readonly="" type="text"/>
    </div>
  </div>
</div>
<Button>Submit</Button>
            </Form>
        </Segment>
      </Container>
    )
}
