/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import {App} from './app';

describe('hello component', () => {
  it('should render hello world', () => {
    const hello = TestUtils.renderIntoDocument(<App/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Hello world!');
  });
});
