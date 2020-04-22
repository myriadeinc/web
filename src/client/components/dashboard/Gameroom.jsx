import React, { Component } from 'react';
import { Switch, Link, withRouter } from 'react-router-dom';

import { Card, CardColumns, Container, Navbar } from 'react-bootstrap';

import Raffles from './games/Raffle.jsx';
import Grid from './games/Grid.jsx';

import { ProtectedRoute, AuthConsumer } from '../../layers/AuthLayer.jsx';

import Style from '../../styles/components/dashboard/Gameroom.less'

function Menu() {
  return (
    <>
      <h3 className="mb-3" >Gameroom</h3>
      <p>Use your Mining Credits to play a selection of games and win XMR!</p>

      <CardColumns className="pt-4">
        <Card className={Style.hoverCard}>
          <Link className={Style.noDecoration} to={`/dashboard/gameroom/raffles`}>
            <Card.Img className={Style.cardImg} variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/047ceb32844729.5695f00736611.jpg" />
            <Card.Body>
              <Card.Title>Drawings</Card.Title>
              <Card.Text>
                Use your Mining Credits to take part in raffles for USD.
            </Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card className={Style.hoverCard}>
          <Link className={Style.noDecoration} to={`/dashboard/gameroom/grid`}>
            <Card.Img className={Style.cardImg} variant="top" src="https://i.pinimg.com/originals/68/d7/a2/68d7a2dad75925c01f7e5c296bd04f86.jpg" />
            <Card.Body>
              <Card.Title>Grid</Card.Title>
              <Card.Text>
                The classic card flipping game, now with Myriade Credits.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>

      </CardColumns>
    </>
  )
}

class GameroomComponent extends Component {

  render() {
    return (
      <AuthConsumer>
        {({ authenticated }) => (
          <Container className="pt-4">
            <Switch>
              <ProtectedRoute exact path={`/dashboard/gameroom/`} component={Menu} authenticated={authenticated} />
              <ProtectedRoute path={`/dashboard/gameroom/raffles`} component={Raffles} authenticated={authenticated} />
              <ProtectedRoute path={`/dashboard/gameroom/grid`} component={Grid} authenticated={authenticated} />
            </Switch>
          </Container>
        )}
      </AuthConsumer>
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