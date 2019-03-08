import React, { PureComponent } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';
import { Layout } from '../../components'
import CreateArticleForm from './form/CreateArticleForm';

const Right = styled.div`
  text-align: right;
`;

const IMG = 'https://rierin.com/wp-content/uploads/2018/10/logo.png';

class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      data: [],
      isForm: false,
    }
  }

  handleForm = (isForm) => {
    this.setState({ isForm })
  }

  handleRemoveArticle = (id) => {
    const { data } = this.state;
    const newData = data.filter(item => item.id !== id)
    this.setState({ data: newData })
  }

  handleSubmit = (values) => {
    const { data } = this.state;
    const id = uuidv4();
    const newData = [
      ...data,
      {
        id,
        ...values
      }
    ]
    this.setState({ data: newData, isForm: false })
  }
      
  render() {
    const { isForm, data } = this.state;
    return (
      <Layout title="Home">
        {isForm ? (
          <CreateArticleForm onSubmit={this.handleSubmit} />
        ) : (
          <Right>
            <Button id="btn-create-article" variant="primary" onClick={() => this.handleForm(true)}>
              Create Article
            </Button>
          </Right>
        )}
        <br/>
        <Row>
          {data.map((item, key) => (
            <Col md={6} xs={12} key={item.id}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={IMG} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button id={`btn-remove-article-${item.id}`} onClick={() => this.handleRemoveArticle(item.id)} variant="danger">Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Layout>
    );
  }
}

export default Home;
