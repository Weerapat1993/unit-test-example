import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class CreateArticleForm extends PureComponent {
  static defaultProps = {
    onSubmit: () => null
  }

  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
    }
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }
  handleDescription = (e) => {
    this.setState({ description: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { title, description } = this.state;
    return (
      <Fragment>
        <Row>
          <Col md={6} xs={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={title} onChange={this.handleTitle} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Description" value={description} onChange={this.handleDescription} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} xs={12}>
          
          </Col>
        </Row>
      </Fragment> 
    )
  }
}

export default CreateArticleForm;
