/* eslint-disable no-unused-vars */
'use strict';

jest.unmock('../../app/CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../../app/CheckboxWithLabel';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from "react-bootstrap"

describe('CheckboxWithLabel', () => {

  it('changes the text after click', () => {
    // Render a checkbox with label in the document

    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );


    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it's Off by default
    expect(checkboxNode.textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    );
    // expect(checkbox).toEqual(true);
    expect(checkboxNode.textContent).toEqual('On');
  });

});