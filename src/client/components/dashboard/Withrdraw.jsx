import React, { Component, useState } from 'react';
import {
  Container,
  Jumbotron,
  Form,
  Button,
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import { MinerConsumer } from '../../pages/Dashboard.jsx';

//TODO: Create a customm email endpoint instead
import emailjs from 'emailjs-com';
import { Alert } from 'shards-react';

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.withdraw = this.withdraw.bind(this);
    this.goBack = this.goBack.bind(this);
    this.withdrawForm = this.withdrawForm.bind(this);

    this.state = {
      useCurrent: false,
      formValid: false,
      confirmScreen: false,
      withdrawing: false,
      amount: 0,
      wallet: '',
      accountWallet: false,
      defaultAddress:
        '44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A',
      error: '',
    };

    this.validateAddress = this.validateAddress.bind(this);
  }

  withdraw(e) {
    e.preventDefault();

    let templateParams = {
      minerName: this.state.minerName,
      minerEmail: this.state.minerEmail,
      minerId: this.state.minerId,
      uuid: this.state.uuid,
      amount: this.state.amount,
      wallet: this.state.wallet,
    };

    if (templateParams.amount >= 0.001) {
      this.setState({ withdrawing: true });
      emailjs
        .send(
          'myriade',
          'myriade_checkout',
          templateParams,
          'user_mW0DdzT5qaDfThP4Nyd3E'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      this.setState({
        error:
          'Hmm it seems like you do not have enough Monero (XMR) in your account for a withdrawal. The minimum amount for a withdrawal is 0.001 XMR. If this is an error, please contact support. Please note: you can not withdraw MC.',
      });
    }
  }

  validateAddress(address) {
    return /[48][0-9AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{93}/gm.test(
      address
    );
  }

  goBack() {
    this.setState({ confirmScreen: false, error: '' });
  }

  withdrawForm(miner) {
    const [validated, setValidated] = useState(false);
    console.log(miner);
    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      if (
        form.checkValidity() === false ||
        !this.validateAddress(this.state.wallet)
      ) {
        setValidated(false);
        event.stopPropagation();
      } else {
        this.setState({ confirmScreen: true });
        this.setState({ minerName: miner.miner.name });
        this.setState({ minerEmail: miner.miner.email });
        this.setState({ minerId: miner.miner.shortId });
        this.setState({ uuid: miner.miner.id });
        this.setState({ amount: miner.miner.monero_balance });
        setValidated(true);
      }
    };

    const changeHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    const checkBoxHandler = (event) => {
      this.setState({ [event.target.name]: event.target.checked });
    };

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>XMR Amount</Form.Label>
          <Row>
            <Col>
              <strong>{miner.miner.monero_balance} XMR</strong>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Monero Wallet Address (
            <a
              href="https://paul-myriade.medium.com/how-to-get-yourself-a-monero-xmr-wallet-address-2edb75a0a575"
              target="blank"
            >
              How to get a Monero Wallet
            </a>
            )
          </Form.Label>
          <Form.Control
            type="text"
            name="wallet"
            placeholder="e.g. 44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A"
            required
            value={
              this.state.accountWallet
                ? miner.miner.monero_wallet
                : this.state.wallet
            }
            onChange={changeHandler}
            isValid={this.validateAddress(this.state.wallet)}
            isInvalid={
              this.state.wallet.length != 0 &&
              !this.validateAddress(this.state.wallet)
            }
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid wallet address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Use the wallet address I signed up with"
            name="accountWallet"
            disabled={miner.miner.monero_wallet == null}
            onChange={checkBoxHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Withdraw
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <Container className="pt-4">
        <h3>Withdraw your XMR</h3>
        <p>
          The mininum XMR balance for a withdrawal is <strong>0.001 XMR</strong>
          . Please note that our withdrawals are manual for now and may take up
          to 24 hours or more to process.
        </p>
        <Jumbotron fluid className="mt-5">
          {this.state.error.length > 0 && (
            <Alert theme="warning">{this.state.error}</Alert>
          )}
          <Container>
            {this.state.withdrawing ? (
              <div>
                <p>
                  Our team is busy processing your request! Please note that
                  this feature is currently done by manual review.
                </p>
                <Spinner animation="grow" variant="primary" />
              </div>
            ) : this.state.confirmScreen ? (
              <Form onSubmit={this.withdraw}>
                <p>
                  I am about to request to withdraw {this.state.amount} XMR from
                  my account. I know that this is a manual process and it may
                  take a few hours for my request to be processed.
                </p>
                <Row>
                  <Col>
                    <Button variant="primary" onClick={this.goBack}>
                      Cancel
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit">
                      Confirm
                    </Button>
                  </Col>
                </Row>
              </Form>
            ) : (
              <MinerConsumer>
                {(miner) => <this.withdrawForm miner={miner} />}
              </MinerConsumer>
            )}
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}

export default Withdraw;
