import React, { Component } from 'react';

import { Modal, Button, Card, InputGroup, FormControl, CardColumns, Container, ButtonToolbar, ButtonGroup, Row, Col } from 'react-bootstrap';
import { Alert } from 'shards-react';

import Style from '../../styles/components/dashboard/Gameroom.less'

import axios from 'axios';


class GameroomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false,
      drawOption: 0,
      tickets: 1
    };
    this.drawingOptions = [
      {
        usd: 1,
        xmr: 0.008,
        price: "-",
        border: "light"
      },
      {
        usd: 5,
        xmr: 0.040,
        price: 4000
      },
      {
        usd: 10,
        xmr: 0.080,
        price: 8000
      },
      {
        usd: 20,
        xmr: 0.160,
        price: 12000
      },
      {
        usd: 50,
        xmr: 0.400,
        price: 18000
      },
      {
        usd: 100,
        xmr: 0.800,
        price: 22000
      },
      {
        usd: 262.5,
        xmr: 2.100,
        price: "-"
      },
    ];
  }

  handleClose = () => this.setState({ modalShow: false });
  handleShow = () => this.setState({ modalShow: true });

  selectOption(i) {
    this.setState({ drawOption: i });
  }
  updateTicketNum(e) {
    this.setState({ tickets: e.target.value })
  }

  render() {

    let drawingCards = this.drawingOptions.map((value, index) =>
      <ButtonGroup className="m-2" key={index}>
        <Button variant="outline-primary" size="lg" onClick={() => this.selectOption(index)}>
          ${value.usd} USD
        </Button>
      </ButtonGroup>
      /*
        <Card border="light" as="Button" className={Style.optionCard + " p-0"}>
            <Card.Body>
              <Card.Title>${value.usd} USD</Card.Title>
              <Card.Text>{value.mc} MC</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Min: {value.min}</small>
            </Card.Footer>
          </Card>
       */
    );

    return (
      <Container>
        <h3>Game Room</h3>
        {/*
        <Alert theme='danger'>
          Our game room is currently under construction, we will notify you as soon as it is completed.
        </Alert>
         */}
        <CardColumns>
          <Card onClick={this.handleShow}>
            <Card.Img className={Style.cardImg} variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
              <Card.Title>Drawings</Card.Title>
              <Card.Text>
                Use your Myriade Credits to take part in raffles for USD.
              </Card.Text>
            </Card.Body>
          </Card>

          <Modal centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Game Drawings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Choose your drawing amount. Please play responsibly.</p>
              <ButtonToolbar className="mb-2">
                {drawingCards}
              </ButtonToolbar>
              <h4>
                <small class="text-muted">Drawing Amount:</small> ${this.drawingOptions[this.state.drawOption].usd}USD <small class="text-muted">({this.drawingOptions[this.state.drawOption].xmr}XMR)</small>
              </h4>
              <h4><small class="text-muted">Ticket Price:</small> {this.drawingOptions[this.state.drawOption].price}MC</h4>
              <h4><small class="text-muted">Minutes Remaining:</small></h4>
              <Row className="justify-content-md-center mb-2">
                <Col md="6">
                  <h4><small class="text-muted">Tickets:</small></h4>
                </Col>
                <Col md="6">
                  <InputGroup clasName="w-25">
                    <FormControl defaultValue={this.state.tickets} type="number" min="1" max="10" onChange={this.updateTicketNum.bind(this)} />
                  </InputGroup>
                </Col>
              </Row>
              <h3><small class="text-muted">Total Price: </small>{this.drawingOptions[this.state.drawOption].price * this.state.tickets}MC</h3>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Confirm Purchase
          </Button>
            </Modal.Footer>
          </Modal>

          <Card>
            <Card.Img className={Style.cardImg} variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
              <Card.Title>Grid</Card.Title>
              <Card.Text>
                The classic card flipping game, now with Myriade Credits.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>

      </Container>

    )
  }
}

export default GameroomComponent;

{/*
  
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
*/}