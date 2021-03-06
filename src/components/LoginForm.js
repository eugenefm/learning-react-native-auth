import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: '',
    };
  }
  

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="name@email.com"
          />
        </CardSection>
        <CardSection>
          <Input 
              secureTextEntry
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder="********"
            />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
};

export default LoginForm;